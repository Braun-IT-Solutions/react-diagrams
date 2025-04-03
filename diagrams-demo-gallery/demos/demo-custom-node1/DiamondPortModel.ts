import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from '@bits_devel/react-diagrams';

export class DiamondPortModel extends PortModel {
	constructor(alignment: PortModelAlignment) {
		super({
			type: 'diamond',
			name: alignment,
			alignment: alignment
		});
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel();
	}
}
