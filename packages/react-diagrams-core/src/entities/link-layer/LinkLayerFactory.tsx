import * as React from 'react';
import { AbstractReactFactory, GenerateModelEvent, GenerateWidgetEvent } from '@bits_devel/react-canvas-core';
import { DiagramEngine } from '../../DiagramEngine';
import { LinkLayerModel } from './LinkLayerModel';
import { LinkLayerWidget } from './LinkLayerWidget';
import { JSX } from 'react';

export class LinkLayerFactory extends AbstractReactFactory<LinkLayerModel, DiagramEngine> {
	constructor() {
		super('diagram-links');
	}

	generateModel(event: GenerateModelEvent): LinkLayerModel {
		return new LinkLayerModel();
	}

	generateReactWidget(event: GenerateWidgetEvent<LinkLayerModel>): JSX.Element {
		return <LinkLayerWidget layer={event.model} engine={this.engine} />;
	}
}
