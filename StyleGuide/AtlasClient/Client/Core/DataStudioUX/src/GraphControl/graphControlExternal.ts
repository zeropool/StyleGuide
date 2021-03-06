/// <reference path="../references.d.ts" />

/// <amd-dependency path="css!./VivaGraphControl/Content/CSS/LightTheme.css" />
/// <amd-dependency path="css!./VivaGraphControl/Content/CSS/TempTheme.css" />
/// <amd-dependency path="css!./VivaGraphControl/Content/CSS/DarkTheme.css" />
/// <amd-dependency path="css!./VivaGraphControl/Content/CSS/Graph.css" />

import VivaGraphWidget = require("VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Visualization/Graph/GraphWidget");
import VivaUtil = require("VivaGraphControl/Content/Scripts/Viva.Controls/Util/Util");
import VivaResize = require("VivaGraphControl/Content/Scripts/Viva.Controls/Util/Resize");
import VivaGraphSvgUtils = require("VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Visualization/Graph/SvgUtils");
import VivaGraphDisposable = require("VivaGraphControl/Content/Scripts/Viva.Controls/Base/Base.Disposable");
import VivaGraphPromise = require("VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Base/Promise");
import VivaGraphImage = require("VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Base/Image");
import VivaGraphGeometry = require("VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Visualization/Graph/Geometry");
import VivaGraphLifetimeManager = require("VivaGraphControl/Content/Scripts/Viva.Controls/Base/Base.TriggerableLifetimeManager");
import VivaGraphViewModel = require("VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Visualization/Graph/GraphViewModel");
import VivaGraphEntitiesForAddition = require("VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Visualization/Graph/GraphEntitiesAddition");
import VivaGraphEntityViewModel = require("VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Visualization/Graph/GraphEntityViewModel");

module Main {
	export import ViewModel = VivaGraphViewModel.ViewModel;
    export import IRect = VivaGraphGeometry.IRect;
    export import IPoint = VivaGraphGeometry.IPoint;
    export import IEdge = VivaGraphEntitiesForAddition.IGraphEdgeForAddition;
    export import GraphNode = VivaGraphEntityViewModel.GraphNode;
    export import GraphWidget = VivaGraphWidget.Widget;
    export import GraphEditorCapabilities = VivaGraphViewModel.GraphEditorCapabilities;
    export import GraphEdge = VivaGraphEntityViewModel.GraphEdge;
    export import ISetNodeRectOptions = VivaGraphEntityViewModel.ISetNodeRectOptions;
    export import GraphEntity = VivaGraphEntityViewModel.GraphEntity;
    export import IUpdateRect = VivaGraphEntityViewModel.IUpdateRect;
    export import GraphEntityViewModel = VivaGraphWidget.GraphEntityViewModel;
    export import GraphEntityModel = VivaGraphEntityViewModel;
}

export = Main;