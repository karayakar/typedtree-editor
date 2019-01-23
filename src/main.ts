﻿import * as Tree from "./tree";
import * as TreeDisplay from "./treedisplay";

let rootNode = Tree.createNode("Conditions.If", b => {
    b.pushNodeField("evaluator", Tree.createNode("Evaluators.CanExecute"));
    b.pushNodeField("node", Tree.createNode("Conditions.First", b => {
        b.pushNodeArrayField("children", [
            Tree.createNode("Utilities.EvaluatorNodePair", b => {
                b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"));
            }),
            Tree.createNode("Utilities.EvaluatorNodePair", b => {
                b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"));
                b.pushNodeField("node", Tree.createNode("Conditions.First", b => {
                    b.pushNodeArrayField("children", [
                        Tree.createNode("Utilities.EvaluatorNodePair", b => {
                            b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"))
                        }),
                        Tree.createNode("Utilities.EvaluatorNodePair", b => {
                            b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"))
                        }),
                        Tree.createNode("Utilities.EvaluatorNodePair", b => {
                            b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"))
                        })
                    ]);
                }));
            }),
            Tree.createNode("Utilities.EvaluatorNodePair", b => {
                b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"));
            })
        ]);
    }));
    b.pushNodeField("evaluator", Tree.createNode("Evaluators.CanExecute"));
    b.pushNodeField("node", Tree.createNode("Conditions.First", b => {
        b.pushNodeArrayField("children", [
            Tree.createNode("Utilities.EvaluatorNodePair", b => {
                b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"));
            }),
            Tree.createNode("Utilities.EvaluatorNodePair", b => {
                b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"));
            }),
            Tree.createNode("Utilities.EvaluatorNodePair", b => {
                b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"));
                b.pushNodeField("node", Tree.createNode("Conditions.First", b => {
                    b.pushNodeArrayField("children", [
                        Tree.createNode("Utilities.EvaluatorNodePair", b => {
                            b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"))
                        }),
                        Tree.createNode("Utilities.EvaluatorNodePair", b => {
                            b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"))
                        }),
                        Tree.createNode("Utilities.EvaluatorNodePair", b => {
                            b.pushNodeField("evaluator", Tree.createNode("Evaluators.IsAbilityCharged"))
                        })
                    ]);
                }));
            })
        ]);
    }));
});

Tree.printNode(rootNode);

TreeDisplay.initialize();
TreeDisplay.setTree(rootNode);

