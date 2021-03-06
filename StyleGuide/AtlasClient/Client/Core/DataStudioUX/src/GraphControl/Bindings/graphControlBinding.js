/// <reference path="../../references.d.ts" />
define(["require", "exports", "VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Visualization/Graph/GraphWidget", "VivaGraphControl/Content/Scripts/Viva.Controls/Util/Util", "VivaGraphControl/Content/Scripts/Viva.Controls/Controls/Visualization/Graph/SvgUtils"], function (require, exports, VivaGraphWidget, VivaUtil, VivaGraphSvgUtils) {
    var Microsoft;
    (function (Microsoft) {
        var DataStudio;
        (function (DataStudio) {
            var Application;
            (function (Application) {
                var Knockout;
                (function (Knockout) {
                    var Bindings;
                    (function (Bindings) {
                        var GraphControlBindingHandler = (function () {
                            function GraphControlBindingHandler() {
                            }
                            GraphControlBindingHandler.prototype.init = function (element, valueAccessor) {
                                var options = valueAccessor() || {};
                                var widget = new VivaGraphWidget.Widget($(element), options);
                                return { controlsDescendantBindings: true };
                            };
                            return GraphControlBindingHandler;
                        })();
                        Bindings.GraphControlBindingHandler = GraphControlBindingHandler;
                        // Copied over from Ibiza.
                        var GraphNodeContentBindingHandler = (function () {
                            function GraphNodeContentBindingHandler() {
                            }
                            GraphNodeContentBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                                var graphNodeViewModel = GraphNodeContentBindingHandler.getGraphNodeContext(bindingContext), classList = VivaUtil.getClassList(element), styleSkin = ko.utils.unwrapObservable(graphNodeViewModel.styleSkin), styleSkinDefinition = VivaGraphSvgUtils.GraphSkinsCollection[styleSkin];
                                classList.add("azc-graph-node-content");
                                classList.add(styleSkinDefinition.skinMonikerClass);
                                styleSkinDefinition.nodeColorClasses.atRest.forEach(function (className) {
                                    classList.add(className);
                                });
                                VivaUtil.setClassList(element, classList);
                            };
                            GraphNodeContentBindingHandler.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                                var graphNodeViewModel = GraphNodeContentBindingHandler.getGraphNodeContext(bindingContext), classList = VivaUtil.getClassList(element), stateResolutionStrategy = VivaGraphSvgUtils.StateCompatibilityStrategyDefinitions["combineHoveredAndSelected"], styleSkinToUse = ko.utils.unwrapObservable(graphNodeViewModel.styleSkin), styleSkinDefinitionToUse = VivaGraphSvgUtils.GraphSkinsCollection[styleSkinToUse], selected = ko.utils.unwrapObservable(graphNodeViewModel.graphNode.selected), hovered = ko.utils.unwrapObservable(graphNodeViewModel.hovered), dragSource = ko.utils.unwrapObservable(graphNodeViewModel.newEdgeDraftSource), dragTarget = ko.utils.unwrapObservable(graphNodeViewModel.newEdgeDraftTarget), atRest = !hovered && !selected && !dragSource && !dragTarget, stateNameToValueMap = {
                                    "atRest": atRest,
                                    "hovered": hovered,
                                    "selected": selected,
                                    "dragSource": dragSource,
                                    "dragTarget": dragTarget
                                }, addClassesIf = function (classesToAdd, condition) {
                                    if (condition === void 0) { condition = true; }
                                    if (condition) {
                                        classesToAdd.forEach(function (className) {
                                            classList.add(className);
                                        });
                                    }
                                    return condition;
                                }, removeClassesIf = function (classesToRemove, condition) {
                                    if (condition === void 0) { condition = true; }
                                    if (condition) {
                                        classesToRemove.forEach(function (className) {
                                            classList.remove(className);
                                        });
                                    }
                                }, addRequiredClassesInOrder = function (statesResolutionOrder) {
                                    if (addClassesIf(styleSkinDefinitionToUse.nodeColorClasses[statesResolutionOrder.state], stateNameToValueMap[statesResolutionOrder.state])) {
                                        if (statesResolutionOrder.compatible) {
                                            statesResolutionOrder.compatible.forEach(function (stateName) {
                                                addClassesIf(styleSkinDefinitionToUse.nodeColorClasses[stateName], stateNameToValueMap[stateName]);
                                            });
                                        }
                                    }
                                    else if (statesResolutionOrder.disjunctive) {
                                        addRequiredClassesInOrder(statesResolutionOrder.disjunctive);
                                    }
                                };
                                // Setting classes for currently selected skin:
                                classList.add(styleSkinDefinitionToUse.skinMonikerClass);
                                // At first, remove classes from not-applicable states
                                // to have opportunity to set these classes if needed as part of applicable states.
                                removeClassesIf(styleSkinDefinitionToUse.nodeColorClasses.atRest, !atRest);
                                removeClassesIf(styleSkinDefinitionToUse.nodeColorClasses.selected, !selected);
                                removeClassesIf(styleSkinDefinitionToUse.nodeColorClasses.hovered, !hovered);
                                removeClassesIf(styleSkinDefinitionToUse.nodeColorClasses.dragSource, !dragSource);
                                removeClassesIf(styleSkinDefinitionToUse.nodeColorClasses.dragTarget, !dragTarget);
                                // Add classes in order defined by statest compatibility strategy.
                                addRequiredClassesInOrder(stateResolutionStrategy);
                                VivaUtil.setClassList(element, classList);
                            };
                            GraphNodeContentBindingHandler.getGraphNodeContext = function (bindingContext) {
                                var i, graphNodeViewModel = null;
                                // We need to get the selected state on the first parent graph node context.
                                for (i = 0; i < bindingContext.$parents.length; i++) {
                                    if (bindingContext.$parents[i] instanceof VivaGraphWidget.GraphNodeViewModel) {
                                        graphNodeViewModel = bindingContext.$parents[i];
                                        break;
                                    }
                                }
                                if (!graphNodeViewModel) {
                                    console.log("The pcGraphNodeContent binding can only be used in the extension template of a graph node view model.");
                                }
                                return graphNodeViewModel;
                            };
                            return GraphNodeContentBindingHandler;
                        })();
                        Bindings.GraphNodeContentBindingHandler = GraphNodeContentBindingHandler;
                        ko.bindingHandlers["graphControl"] = new GraphControlBindingHandler();
                        ko.bindingHandlers["graphNode"] = new GraphNodeContentBindingHandler();
                    })(Bindings = Knockout.Bindings || (Knockout.Bindings = {}));
                })(Knockout = Application.Knockout || (Application.Knockout = {}));
            })(Application = DataStudio.Application || (DataStudio.Application = {}));
        })(DataStudio = Microsoft.DataStudio || (Microsoft.DataStudio = {}));
    })(Microsoft || (Microsoft = {}));
});
//# sourceMappingURL=graphControlBinding.js.map