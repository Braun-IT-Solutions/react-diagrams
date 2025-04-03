import {
	DefaultDiagramState,
	DiagramEngine,
	LinkLayerFactory,
	NodeLayerFactory
} from '@bits_devel/react-diagrams-core';
import {
	DefaultLabelFactory,
	DefaultLinkFactory,
	DefaultNodeFactory,
	DefaultPortFactory
} from '@bits_devel/react-diagrams-defaults';
import { PathFindingLinkFactory } from '@bits_devel/react-diagrams-routing';
import { SelectionBoxLayerFactory, CanvasEngineOptions } from '@bits_devel/react-canvas-core';

export * from '@bits_devel/react-canvas-core';
export * from '@bits_devel/react-diagrams-core';
export * from '@bits_devel/react-diagrams-defaults';
export * from '@bits_devel/react-diagrams-routing';

/**
 * Construct an engine with the defaults installed
 */
export default (options: CanvasEngineOptions = {}): DiagramEngine => {
	const engine = new DiagramEngine(options);

	// register model factories
	engine.getLayerFactories().registerFactory(new NodeLayerFactory());
	engine.getLayerFactories().registerFactory(new LinkLayerFactory());
	engine.getLayerFactories().registerFactory(new SelectionBoxLayerFactory());

	engine.getLabelFactories().registerFactory(new DefaultLabelFactory());
	engine.getNodeFactories().registerFactory(new DefaultNodeFactory()); // i cant figure out why
	engine.getLinkFactories().registerFactory(new DefaultLinkFactory());
	engine.getLinkFactories().registerFactory(new PathFindingLinkFactory());
	engine.getPortFactories().registerFactory(new DefaultPortFactory());

	// register the default interaction behaviours
	engine.getStateMachine().pushState(new DefaultDiagramState());
	return engine;
};
