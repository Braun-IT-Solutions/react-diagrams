import _map from 'lodash/map';
import { NodeModel, NodeModelGenerics, PortModelAlignment } from '@bits_devel/react-diagrams-core';
import { DefaultPortModel } from '../port/DefaultPortModel';
import { BasePositionModelOptions, DeserializeEvent } from '@bits_devel/react-canvas-core';

export interface DefaultNodeModelOptions extends BasePositionModelOptions {
	name?: string;
	color?: string;
}

export interface DefaultNodeModelGenerics extends NodeModelGenerics {
	OPTIONS: DefaultNodeModelOptions;
}

export class DefaultNodeModel extends NodeModel<DefaultNodeModelGenerics> {
	protected portsIn: DefaultPortModel[];
	protected portsOut: DefaultPortModel[];

	constructor(name: string, color: string);
	constructor(options?: DefaultNodeModelOptions);
	constructor(options: any = {}, color?: string) {
		if (typeof options === 'string') {
			options = {
				name: options,
				color: color
			};
		}
		super({
			type: 'default',
			name: 'Untitled',
			color: 'rgb(0,192,255)',
			...options
		});
		this.portsOut = [];
		this.portsIn = [];
	}

	doClone(lookupTable: {}, clone: any): void {
		clone.portsIn = [];
		clone.portsOut = [];
		super.doClone(lookupTable, clone);
	}

	removePort(port: DefaultPortModel): void {
		super.removePort(port);
		if (port.getOptions().in) {
			this.portsIn.splice(this.portsIn.indexOf(port), 1);
		} else {
			this.portsOut.splice(this.portsOut.indexOf(port), 1);
		}
	}

	addPort<T extends DefaultPortModel>(port: T): T {
		super.addPort(port);
		if (port.getOptions().in) {
			if (this.portsIn.indexOf(port) === -1) {
				this.portsIn.push(port);
			}
		} else {
			if (this.portsOut.indexOf(port) === -1) {
				this.portsOut.push(port);
			}
		}
		return port;
	}

	addInPort(label: string, after = true): DefaultPortModel {
		const p = new DefaultPortModel({
			in: true,
			name: label,
			label: label,
			alignment: PortModelAlignment.LEFT
		});
		if (!after) {
			this.portsIn.splice(0, 0, p);
		}
		return this.addPort(p);
	}

	addOutPort(label: string, after = true): DefaultPortModel {
		const p = new DefaultPortModel({
			in: false,
			name: label,
			label: label,
			alignment: PortModelAlignment.RIGHT
		});
		if (!after) {
			this.portsOut.splice(0, 0, p);
		}
		return this.addPort(p);
	}

	deserialize(event: DeserializeEvent<this>) {
		super.deserialize(event);
		this.options.name = event.data.name;
		this.options.color = event.data.color;
		this.portsIn = _map(event.data.portsInOrder, (id) => {
			return this.getPortFromID(id);
		}) as DefaultPortModel[];
		this.portsOut = _map(event.data.portsOutOrder, (id) => {
			return this.getPortFromID(id);
		}) as DefaultPortModel[];
	}

	serialize(): any {
		return {
			...super.serialize(),
			name: this.options.name,
			color: this.options.color,
			portsInOrder: _map(this.portsIn, (port) => {
				return port.getID();
			}),
			portsOutOrder: _map(this.portsOut, (port) => {
				return port.getID();
			})
		};
	}

	getInPorts(): DefaultPortModel[] {
		return this.portsIn;
	}

	getOutPorts(): DefaultPortModel[] {
		return this.portsOut;
	}
}
