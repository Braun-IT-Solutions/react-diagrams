import { BaseModelOptions, DefaultPortModel, NodeModel } from '@bits_devel/react-diagrams';

export interface TSCustomNodeModelOptions extends BaseModelOptions {
	color?: string;
}

export class TSCustomNodeModel extends NodeModel {
	color: string;

	constructor(options: TSCustomNodeModelOptions = {}) {
		super({
			...options,
			type: 'ts-custom-node'
		});
		this.color = options.color || 'red';

		// setup an in and out port
		this.addPort(
			new DefaultPortModel({
				in: true,
				name: 'in'
			})
		);
		this.addPort(
			new DefaultPortModel({
				in: false,
				name: 'out'
			})
		);
	}

	serialize() {
		return {
			...super.serialize(),
			color: this.color
		};
	}

	deserialize(event): void {
		super.deserialize(event);
		this.color = event.data.color;
	}
}
