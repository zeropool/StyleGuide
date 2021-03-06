/// <reference path="../references.d.ts" />
define(["require", "exports", "VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Visualization/Graph/GraphWidget", "VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Visualization/Graph/GraphViewModel", "VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Visualization/Graph/GraphEntityViewModel", "css!./VivaGraphControl/Content/CSS/LightTheme.css", "css!./VivaGraphControl/Content/CSS/TempTheme.css", "css!./VivaGraphControl/Content/CSS/DarkTheme.css", "css!./VivaGraphControl/Content/CSS/Graph.css"], function (require, exports, VivaGraphWidget, VivaGraphViewModel, VivaGraphEntityViewModel) {
    var Main;
    (function (Main) {
        Main.ViewModel = VivaGraphViewModel.ViewModel;
        Main.GraphNode = VivaGraphEntityViewModel.GraphNode;
        Main.GraphWidget = VivaGraphWidget.Widget;
        Main.GraphEditorCapabilities = VivaGraphViewModel.GraphEditorCapabilities;
        Main.GraphEdge = VivaGraphEntityViewModel.GraphEdge;
        Main.GraphEntity = VivaGraphEntityViewModel.GraphEntity;
        Main.GraphEntityViewModel = VivaGraphWidget.GraphEntityViewModel;
        Main.GraphEntityModel = VivaGraphEntityViewModel;
    })(Main || (Main = {}));
    return Main;
});
//# sourceMappingURL=graphControlExternal.js.map