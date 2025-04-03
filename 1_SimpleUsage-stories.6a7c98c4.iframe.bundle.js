/*! For license information please see 1_SimpleUsage-stories.6a7c98c4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_bits_devel_react_diagrams_gallery=self.webpackChunk_bits_devel_react_diagrams_gallery||[]).push([[718],{"../node_modules/.pnpm/@storybook+addon-actions@8.6.10_storybook@8.6.10_prettier@3.5.3_/node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),__defProp=Object.defineProperty,ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var preview_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(preview_exports,{argsEnhancers:()=>argsEnhancers,loaders:()=>loaders});var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),argsEnhancers=[context=>{let{initialArgs,argTypes,parameters:{actions:actions2}}=context;return actions2?.disable||!argTypes?{}:Object.entries(argTypes).filter((([name,argType])=>!!argType.action)).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action("string"==typeof argType.action?argType.action:name)),acc)),{})},context=>{let{initialArgs,argTypes,id,parameters:{actions:actions2}}=context;if(!actions2||actions2.disable||!actions2.argTypesRegex||!argTypes)return{};let argTypesRegex=new RegExp(actions2.argTypesRegex);return Object.entries(argTypes).filter((([name])=>!!argTypesRegex.test(name))).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name,{implicit:!0,id})),acc)),{})}],subscribed=!1,loaders=[context=>{let{parameters:{actions:actions2}}=context;if(!actions2?.disable&&!subscribed&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in external_STORYBOOK_MODULE_GLOBAL_.global&&"function"==typeof external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__){(0,external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__)(((mock,args)=>{let name=mock.getMockName();"spy"!==name&&(!/^next\/.*::/.test(name)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some((prefix=>name.startsWith(prefix))))&&action(name)(args)})),subscribed=!0}}]},"./demos/1_SimpleUsage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CanvasDrag:()=>CanvasDrag,CanvasGridSize:()=>CanvasGridSize,CanvasPanAndZoom:()=>CanvasPanAndZoom,DemoSimple:()=>DemoSimple,DynamicPorts:()=>DynamicPorts,EventsAndListeners:()=>EventsAndListeners,LinksWithLabels:()=>LinksWithLabels,LockedWidget:()=>LockedWidget,PerformanceDemo:()=>PerformanceDemo,SimpleFlowExample:()=>SimpleFlowExample,ZoomToFit:()=>ZoomToFit,ZoomToFitSelectNodes:()=>ZoomToFitSelectNodes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_1_SimpleUsage_stories});var dist=__webpack_require__("../packages/react-canvas-core/dist/index.js"),react_diagrams_dist=__webpack_require__("../packages/react-diagrams/dist/index.js"),react=__webpack_require__("../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),DemoCanvasWidget=__webpack_require__("./demos/helpers/DemoCanvasWidget.tsx");function generateNodes(model,offsetX,offsetY){var node1=new react_diagrams_dist.R$("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100+offsetX,100+offsetY);var node2=new react_diagrams_dist.R$("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(200+offsetX,100+offsetY);var link1=port1.link(port2);model.addAll(node1,node2,link1)}var addon_actions_dist=__webpack_require__("../node_modules/.pnpm/@storybook+addon-actions@8.6.10_storybook@8.6.10_prettier@3.5.3_/node_modules/@storybook/addon-actions/dist/index.mjs");var DemoWorkspaceWidget=__webpack_require__("./demos/helpers/DemoWorkspaceWidget.tsx");function demo_zoom_to_fit_generateNodes(model,offsetX,offsetY){var node1=new react_diagrams_dist.R$("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100+offsetX,100+offsetY);var node2=new react_diagrams_dist.R$("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(200+offsetX,100+offsetY);var link1=port1.link(port2);model.addAll(node1,node2,link1)}function demo_zoom_to_fit_nodes_generateNodes(model,offsetX,offsetY){var node1=new react_diagrams_dist.R$("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100+offsetX,100+offsetY);var node2=new react_diagrams_dist.R$("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(200+offsetX,100+offsetY);var link1=port1.link(port2);model.addAll(node1,node2,link1)}class CanvasDragToggle extends react.Component{enableDrag=()=>{const{engine}=this.props;engine.getStateMachine().getCurrentState().dragCanvas.config.allowDrag=!0};disableDrag=()=>{const{engine}=this.props;engine.getStateMachine().getCurrentState().dragCanvas.config.allowDrag=!1};render(){const{engine}=this.props;return react.createElement(DemoWorkspaceWidget.f,{buttons:[react.createElement(DemoWorkspaceWidget.s,{key:1,onClick:this.enableDrag},"Enable canvas drag"),react.createElement(DemoWorkspaceWidget.s,{key:2,onClick:this.disableDrag},"Disable canvas drag")]},react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine})))}}class CanvasPanAndZoomToggle extends react.Component{render(){const{engine}=this.props;return react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine}))}}var values=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/values.js"),values_default=__webpack_require__.n(values);class CloneSelected extends react.Component{addPorts=()=>{const nodes=values_default()(this.props.model.getNodes());for(let node of nodes)"Node 2"===node.getOptions().name?node.addInPort(`in-${node.getInPorts().length+1}`,!1):node.addOutPort(`out-${node.getOutPorts().length+1}`,!1);this.props.engine.repaintCanvas()};render(){const{engine}=this.props;return react.createElement(DemoWorkspaceWidget.f,{buttons:react.createElement(DemoWorkspaceWidget.s,{onClick:this.addPorts},"Add more ports")},react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine})))}}dist.Z0.TESTING=!0;const _1_SimpleUsage_stories={title:"Simple Usage"},DemoSimple=()=>{var engine=(0,react_diagrams_dist.Ay)(),model=new react_diagrams_dist.DQ,node1=new react_diagrams_dist.R$({name:"Node 1",color:"rgb(0,192,255)"});node1.setPosition(100,100);let port1=node1.addOutPort("Out");var node2=new react_diagrams_dist.R$("Node 2","rgb(192,255,0)");let port2=node2.addInPort("In");node2.setPosition(400,100);let link1=port1.link(port2);return link1.getOptions().testName="Test",link1.addLabel("Hello World!"),model.addAll(node1,node2,link1),engine.setModel(model),react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine}))},SimpleFlowExample=()=>{var engine=(0,react_diagrams_dist.Ay)();const state=engine.getStateMachine().getCurrentState();state instanceof react_diagrams_dist.kH&&(state.dragNewLink.config.allowLooseLinks=!1);var model=new react_diagrams_dist.DQ,node1=new react_diagrams_dist.R$("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.R$("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,100);var link1=port1.link(port2),node3=new react_diagrams_dist.R$("Node 3","rgb(0,192,255)");return node3.addOutPort("Out"),node3.setPosition(100,200),model.addAll(node1,node2,node3,link1),engine.setModel(model),react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine}))},PerformanceDemo=()=>{for(var engine=(0,react_diagrams_dist.Ay)(),model=new react_diagrams_dist.DQ,i=0;i<8;i++)for(var j=0;j<8;j++)generateNodes(model,200*i,100*j);return engine.setModel(model),react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine}))},LockedWidget=()=>{var engine=(0,react_diagrams_dist.Ay)(),model=new react_diagrams_dist.DQ,node1=new react_diagrams_dist.R$("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.R$("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,100);let link1=port1.link(port2);model.addAll(node1,node2,link1);var node3=new react_diagrams_dist.R$("Node 3","rgb(0,192,255)"),port3=node3.addOutPort("Out");node3.setPosition(100,250);var node4=new react_diagrams_dist.R$("Node 4","rgb(192,255,0)"),port4=node4.addInPort("In");node4.setPosition(400,250);var link2=port3.link(port4);return link2.point(350,225),link2.point(200,225),model.addAll(node3,node4,link2),engine.setModel(model),model.setLocked(!0),react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine}))},CanvasGridSize=()=>{var engine=(0,react_diagrams_dist.Ay)(),model=new react_diagrams_dist.DQ;model.setGridSize(50);var node1=new react_diagrams_dist.R$("Node 1","rgb(0,192,255)");let port=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.R$("Node 2","rgb(192,255,0)");let port2=node2.addInPort("In");node2.setPosition(400,100);let link1=port.link(port2);return model.addAll(node1,node2,link1),engine.setModel(model),react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine}))},EventsAndListeners=()=>{var engine=(0,react_diagrams_dist.Ay)(),model=new react_diagrams_dist.DQ,node1=new react_diagrams_dist.R$("Node 1","rgb(255,99,66)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.R$("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,40);var node3=new react_diagrams_dist.R$("Node 3","rgb(128,99,255)"),port3=node3.addInPort("In");node3.setPosition(300,160);let link1=port1.link(port2),link2=port1.link(port3);return model.addAll(node1,node2,node3,link1,link2).forEach((item=>{item.registerListener({eventDidFire:(0,addon_actions_dist.XI)("element eventDidFire")})})),model.registerListener({eventDidFire:(0,addon_actions_dist.XI)("model eventDidFire")}),engine.setModel(model),react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine}))},ZoomToFit=()=>{for(var engine=(0,react_diagrams_dist.Ay)(),model=new react_diagrams_dist.DQ,i=0;i<8;i++)for(var j=0;j<8;j++)demo_zoom_to_fit_generateNodes(model,200*i,100*j);return engine.setModel(model),react.createElement(DemoWorkspaceWidget.f,{buttons:react.createElement(DemoWorkspaceWidget.s,{onClick:()=>engine.zoomToFit()},"Zoom to fit")},react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine})))},ZoomToFitSelectNodes=()=>{for(var engine=(0,react_diagrams_dist.Ay)(),model=new react_diagrams_dist.DQ,i=0;i<8;i++)for(var j=0;j<8;j++)demo_zoom_to_fit_nodes_generateNodes(model,200*i,100*j);return engine.setModel(model),react.createElement(DemoWorkspaceWidget.f,{buttons:react.createElement(DemoWorkspaceWidget.s,{onClick:()=>engine.zoomToFitSelectedNodes(50)},"Zoom to fit")},react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine})))},CanvasDrag=()=>{var engine=(0,react_diagrams_dist.Ay)(),model=new react_diagrams_dist.DQ,node1=new react_diagrams_dist.R$("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.R$("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,100);var link1=port1.link(port2);return model.addAll(node1,node2,link1),engine.setModel(model),react.createElement(CanvasDragToggle,{engine,model})},CanvasPanAndZoom=()=>{var engine=(0,react_diagrams_dist.Ay)({registerDefaultPanAndZoomCanvasAction:!0,registerDefaultZoomCanvasAction:!1}),model=new react_diagrams_dist.DQ,node1=new react_diagrams_dist.R$("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.R$("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,100);var link1=port1.link(port2);return model.addAll(node1,node2,link1),engine.setModel(model),react.createElement(CanvasPanAndZoomToggle,{engine,model})},DynamicPorts=()=>{var engine=(0,react_diagrams_dist.Ay)(),model=new react_diagrams_dist.DQ,node1=new react_diagrams_dist.R$("Node 1","rgb(0,192,255)");node1.setPosition(100,100);var node2=new react_diagrams_dist.R$("Node 2","rgb(192,255,0)");return node2.setPosition(400,100),model.addAll(node1,node2),engine.setModel(model),react.createElement(CloneSelected,{engine,model})},LinksWithLabels=()=>{const engine=(0,react_diagrams_dist.Ay)(),model=new react_diagrams_dist.DQ,node1=new react_diagrams_dist.R$("Node A","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);const node2=new react_diagrams_dist.R$("Node B","rgb(255,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,50);const node3=new react_diagrams_dist.R$("Node C (no label)","rgb(192,255,255)"),port3=node3.addInPort("In");node3.setPosition(450,180);const node4=new react_diagrams_dist.R$("Node D","rgb(192,0,255)"),port4=node4.addInPort("In");node4.setPosition(300,250);const link1=port1.link(port2);link1.addLabel("Custom label 1"),link1.addLabel("Custom label 2");const link2=port1.link(port3),link3=port1.link(port4);return link3.addLabel("Emoji label: 🎉"),model.addAll(node1,node2,node3,node4,link1,link2,link3),engine.setModel(model),react.createElement(DemoWorkspaceWidget.f,{buttons:react.createElement(DemoWorkspaceWidget.s,{onClick:()=>{(0,addon_actions_dist.XI)("Serialized Graph")(JSON.stringify(model.serializeDiagram(),null,2))}},"Serialize Graph")},react.createElement(DemoCanvasWidget.M,null,react.createElement(dist.Nw,{engine})))},__namedExportsOrder=["DemoSimple","SimpleFlowExample","PerformanceDemo","LockedWidget","CanvasGridSize","EventsAndListeners","ZoomToFit","ZoomToFitSelectNodes","CanvasDrag","CanvasPanAndZoom","DynamicPorts","LinksWithLabels"]},"./demos/helpers/DemoWorkspaceWidget.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DemoWorkspaceWidget,s:()=>DemoButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.0.12_react@19.0.0__@types+react@19.0.12_react@19.0.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");let S;var _S;(_S=S||(S={})).Toolbar=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
		padding: 5px;
		display: flex;
		flex-shrink: 0;
	`,_S.Content=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
		flex-grow: 1;
		height: 100%;
	`,_S.Container=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
		background: black;
		display: flex;
		flex-direction: column;
		height: 100%;
		border-radius: 5px;
		overflow: hidden;
	`;const DemoButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.button`
	background: rgb(60, 60, 60);
	font-size: 14px;
	padding: 5px 10px;
	border: none;
	color: white;
	outline: none;
	cursor: pointer;
	margin: 2px;
	border-radius: 3px;

	&:hover {
		background: rgb(0, 192, 255);
	}
`;class DemoWorkspaceWidget extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(S.Container,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(S.Toolbar,null,this.props.buttons),react__WEBPACK_IMPORTED_MODULE_0__.createElement(S.Content,null,this.props.children))}}}}]);
//# sourceMappingURL=1_SimpleUsage-stories.6a7c98c4.iframe.bundle.js.map