import * as React from 'react';
import { DiagramEngine, CanvasWidget } from '@bits_devel/react-diagrams';

export interface BodyWidgetProps {
	engine: DiagramEngine;
}

export class BodyWidget extends React.Component<BodyWidgetProps> {
	render() {
		return <CanvasWidget className="diagram-container" engine={this.props.engine} />;
	}
}
