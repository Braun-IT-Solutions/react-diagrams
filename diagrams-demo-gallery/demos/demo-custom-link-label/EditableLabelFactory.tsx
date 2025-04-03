import * as React from 'react';
import { AbstractReactFactory, GenerateWidgetEvent } from '@bits_devel/react-canvas-core';
import { DiagramEngine } from '@bits_devel/react-diagrams';

import { EditableLabelModel } from './EditableLabelModel';
import { EditableLabelWidget } from './EditableLabelWidget';
import { JSX } from 'react';

export class EditableLabelFactory extends AbstractReactFactory<EditableLabelModel, DiagramEngine> {
	constructor() {
		super('editable-label');
	}

	generateModel(): EditableLabelModel {
		return new EditableLabelModel();
	}

	generateReactWidget(event: GenerateWidgetEvent<EditableLabelModel>): JSX.Element {
		return <EditableLabelWidget model={event.model} />;
	}
}
