import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH1, EditableParagraph, DataVisualization } from "@/components/atoms";

// Initialize variables and their colors from this file's variable definitions
import { useVariableStore, initializeVariableColors } from "@/stores";
import { getDefaultValues, variableDefinitions } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());
initializeVariableColors(variableDefinitions);

/**
 * ------------------------------------------------------------------
 * BLOCK CONFIGURATION
 * ------------------------------------------------------------------
 * This file is the entry point for your lesson content.
 * 
 * INSTRUCTIONS:
 * 1. Create your content using <Block> components.
 * 2. Use Layout components to organize your blocks.
 * 3. Add your blocks to the `blocks` array below.
 * 
 * ------------------------------------------------------------------
 * CROSS-BLOCK VARIABLES
 * ------------------------------------------------------------------
 * Variables can be shared across blocks using the global store.
 * 
 * DEFINE VARIABLES: src/data/variables.ts (use only variables.ts in this file; same structure as exampleBlocks + exampleVariables)
 * 
 * USAGE IN BLOCKS:
 * 
 * // Reading a value (auto-updates when changed):
 * import { useVar } from '@/stores';
 * const amplitude = useVar('amplitude', 1);
 * 
 * // Setting a value:
 * import { useSetVar } from '@/stores';
 * const setVar = useSetVar();
 * setVar('amplitude', 2.5);
 * 
 * // InlineScrubbleNumber (from variables.ts): getVariableInfo(name) + numberPropsFromDefinition(...)
 * <InlineScrubbleNumber varName="amplitude" {...numberPropsFromDefinition(getVariableInfo('amplitude'))} />
 * 
 * ------------------------------------------------------------------
 * AVAILABLE LAYOUTS
 * ------------------------------------------------------------------
 * 
 * 1. StackLayout
 *    - Best for: Title headers, introductory text, broad visualizations.
 *    - Usage:
 *      <StackLayout maxWidth="xl">
 *          <Block id="intro">...</Block>
 *      </StackLayout>
 * 
 * 2. SplitLayout
 *    - Best for: Side-by-side content (e.g., Text + Visualization).
 *    - Usage:
 *      <SplitLayout ratio="1:1" gap="lg">
 *          <Block id="left">...</Block>
 *          <Block id="right">...</Block>
 *      </SplitLayout>
 * 
 * 3. GridLayout
 *    - Best for: Multiple equal-sized items (cards, galleries).
 *    - Usage:
 *      <GridLayout columns={3} gap="md">
 *          <Block id="item-1">...</Block>
 *          <Block id="item-2">...</Block>
 *          <Block id="item-3">...</Block>
 *      </GridLayout>
 * 
 * 4. ScrollytellingLayout
 *    - Best for: Narrative steps with a reactive sticky visualization.
 *    - Usage:
 *      <ScrollytellingLayout varName="scrollStep" visualPosition="right">
 *          <ScrollStep><Block id="step-0">...</Block></ScrollStep>
 *          <ScrollStep><Block id="step-1">...</Block></ScrollStep>
 *          <ScrollVisual><Block id="viz">...</Block></ScrollVisual>
 *      </ScrollytellingLayout>
 * 
 * EXAMPLES:
 * See `src/data/exampleBlocks.tsx` for comprehensive examples.
 * 
 * NOTE: If you are seeing examples in the browser instead of this content,
 * check your .env file and set VITE_SHOW_EXAMPLES=false.
 */

export const blocks: ReactElement[] = [
    <StackLayout key="layout-maths-education" maxWidth="xl">
        <Block id="block-maths-education" padding="lg">
            <EditableH1 id="h1-maths-education" blockId="block-maths-education">
                The Power of Active Learning in Mathematics
            </EditableH1>
            <EditableParagraph id="para-maths-education" blockId="block-maths-education">
                Mathematics is not a spectator sport. For centuries, students have been taught to watch, memorise, and reproduce — but rarely to explore. Yet the most profound mathematical understanding comes not from passive observation, but from active experimentation. When students can manipulate a variable and watch a graph respond, drag a point and see a theorem come alive, or build a shape and discover its hidden properties, mathematics transforms from a set of rules to be memorised into a living, breathing landscape to be explored. This is the heart of explorable explanations: turning every reader into a mathematical explorer.
            </EditableParagraph>
        </Block>
    </StackLayout>,
    <StackLayout key="layout-line-chart" maxWidth="xl">
        <Block id="block-line-chart" padding="lg">
            <DataVisualization
                type="line"
                title="Student Progress Over Time"
                data={[
                    { label: "Week 1", value: 45 },
                    { label: "Week 2", value: 52 },
                    { label: "Week 3", value: 58 },
                    { label: "Week 4", value: 65 },
                    { label: "Week 5", value: 72 },
                    { label: "Week 6", value: 78 },
                    { label: "Week 7", value: 85 },
                    { label: "Week 8", value: 92 },
                ]}
                xLabel="Time"
                yLabel="Understanding (%)"
                color="#6366f1"
                curve="smooth"
                showGrid={true}
                animate={true}
                caption="Interactive learning leads to deeper understanding over time"
            />
        </Block>
    </StackLayout>,
    <StackLayout key="layout-chart-explanation" maxWidth="xl">
        <Block id="block-chart-explanation" padding="lg">
            <EditableParagraph id="para-chart-explanation" blockId="block-chart-explanation">
                The chart above tells a compelling story. Notice how understanding doesn't grow in sudden leaps — it builds gradually, week by week, as students engage with mathematical concepts through exploration rather than memorisation. The smooth upward curve reflects what researchers have consistently found: when learners interact with ideas, test their intuitions, and see immediate feedback, knowledge becomes durable. By Week 8, students aren't just remembering formulas — they understand why those formulas work, and that understanding stays with them far longer than any memorised procedure ever could.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
