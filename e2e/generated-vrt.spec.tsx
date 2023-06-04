// THIS FILE IS GENERATED BY ./scripts/testgen.mts

import { expect, test, ComponentFixtures } from "@playwright/experimental-ct-react"
import { Page } from "@playwright/test"
type Mount = ComponentFixtures["mount"]
import { TestContextProvider } from "../src/context/TestContext"

import LinePointSlopeExample from "../docs/components/guide-examples/LinePointSlopeExample"
import LineSegmentExample from "../docs/components/guide-examples/LineSegmentExample"
import LineThroughPointsExample from "../docs/components/guide-examples/LineThroughPointsExample"
import MovableCircle from "../docs/components/guide-examples/MovableCircle"
import MovableEllipse from "../docs/components/guide-examples/MovableEllipse"
import PlainMafsExample from "../docs/components/guide-examples/PlainMafsExample"
import PolygonExample from "../docs/components/guide-examples/PolygonExample"
import PolylineExample from "../docs/components/guide-examples/PolylineExample"
import SnapPoint from "../docs/components/guide-examples/SnapPoint"
import TextExample from "../docs/components/guide-examples/TextExample"
import PizzaMarch from "../docs/components/guide-examples/custom/pizza-march"
import PointCloud from "../docs/components/guide-examples/custom/point-cloud"
import PaneVisualizerExample from "../docs/components/guide-examples/debug/PaneVisualizerExample"
import DynamicMovablePoints from "../docs/components/guide-examples/display/DynamicMovablePoints"
import Latex from "../docs/components/guide-examples/display/Latex"
import LatexDoc from "../docs/components/guide-examples/display/LatexDoc"
import PointsAlongFunction from "../docs/components/guide-examples/display/PointsAlongFunction"
import SimplePoint from "../docs/components/guide-examples/display/SimplePoint"
import FancyParabola from "../docs/components/guide-examples/examples/FancyParabola"
import ProjectileMotion from "../docs/components/guide-examples/examples/ProjectileMotion"
import Riemann from "../docs/components/guide-examples/examples/Riemann"
import Draggable from "../docs/components/guide-examples/hello-fx/draggable"
import Plain from "../docs/components/guide-examples/hello-fx/plain"
import SinePi from "../docs/components/guide-examples/hello-fx/sine-pi"
import Sine from "../docs/components/guide-examples/hello-fx/sine"
import Subdivisions from "../docs/components/guide-examples/hello-fx/subdivisions"
import Inequalities from "../docs/components/guide-examples/plots/inequalities"
import OfXAndY from "../docs/components/guide-examples/plots/of-x-and-y"
import SineStressTest from "../docs/components/guide-examples/plots/sine-stress-test"
import TwistyBoi from "../docs/components/guide-examples/plots/twisty-boi"
import SimpleTransform from "../docs/components/guide-examples/utility/SimpleTransform"
import CartesianCoordinatesConfigExample from "../docs/components/guide-examples/display/coordinates/CartesianCoordinatesConfigExample"
import CartesianCoordinatesExample from "../docs/components/guide-examples/display/coordinates/CartesianCoordinatesExample"
import PolarCoordinatesExample from "../docs/components/guide-examples/display/coordinates/PolarCoordinatesExample"
import VectorExample from "../docs/components/guide-examples/display/vectors/VectorExample"
import ContainViewbox from "../docs/components/guide-examples/display/viewbox/ContainViewbox"
import StretchViewbox from "../docs/components/guide-examples/display/viewbox/StretchViewbox"
import ZoomExample from "../docs/components/guide-examples/display/viewbox/ZoomExample"

async function visualTest(mount: Mount, page: Page, node: React.ReactElement) {
  const component = await mount(node)
  ;(await component.locator(".MafsView").count()) === 0
    ? await expect(component).toHaveClass("MafsView")
    : await expect(component.locator(".MafsView")).toHaveClass("MafsView")
  await expect(page).toHaveScreenshot()
}

test("guide-examples/LinePointSlopeExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <LinePointSlopeExample />
    </TestContextProvider>
  ))

test("guide-examples/LineSegmentExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <LineSegmentExample />
    </TestContextProvider>
  ))

test("guide-examples/LineThroughPointsExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <LineThroughPointsExample />
    </TestContextProvider>
  ))

test("guide-examples/MovableCircle", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <MovableCircle />
    </TestContextProvider>
  ))

test("guide-examples/MovableEllipse", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <MovableEllipse />
    </TestContextProvider>
  ))

test("guide-examples/PlainMafsExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <PlainMafsExample />
    </TestContextProvider>
  ))

test("guide-examples/PolygonExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <PolygonExample />
    </TestContextProvider>
  ))

test("guide-examples/PolylineExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <PolylineExample />
    </TestContextProvider>
  ))

test("guide-examples/SnapPoint", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <SnapPoint />
    </TestContextProvider>
  ))

test("guide-examples/TextExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <TextExample />
    </TestContextProvider>
  ))

test("guide-examples/custom/PizzaMarch", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <PizzaMarch />
    </TestContextProvider>
  ))

test("guide-examples/custom/PointCloud", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <PointCloud />
    </TestContextProvider>
  ))

test("guide-examples/debug/PaneVisualizerExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <PaneVisualizerExample />
    </TestContextProvider>
  ))

test("guide-examples/display/DynamicMovablePoints", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <DynamicMovablePoints />
    </TestContextProvider>
  ))

test("guide-examples/display/Latex", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <Latex />
    </TestContextProvider>
  ))

test("guide-examples/display/LatexDoc", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <LatexDoc />
    </TestContextProvider>
  ))

test("guide-examples/display/PointsAlongFunction", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <PointsAlongFunction />
    </TestContextProvider>
  ))

test("guide-examples/display/SimplePoint", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <SimplePoint />
    </TestContextProvider>
  ))

test("guide-examples/examples/FancyParabola", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <FancyParabola />
    </TestContextProvider>
  ))

test("guide-examples/examples/ProjectileMotion", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <ProjectileMotion />
    </TestContextProvider>
  ))

test("guide-examples/examples/Riemann", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <Riemann />
    </TestContextProvider>
  ))

test("guide-examples/hello-fx/Draggable", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <Draggable />
    </TestContextProvider>
  ))

test("guide-examples/hello-fx/Plain", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <Plain />
    </TestContextProvider>
  ))

test("guide-examples/hello-fx/SinePi", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <SinePi />
    </TestContextProvider>
  ))

test("guide-examples/hello-fx/Sine", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <Sine />
    </TestContextProvider>
  ))

test("guide-examples/hello-fx/Subdivisions", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <Subdivisions />
    </TestContextProvider>
  ))

test("guide-examples/plots/Inequalities", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <Inequalities />
    </TestContextProvider>
  ))

test("guide-examples/plots/OfXAndY", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <OfXAndY />
    </TestContextProvider>
  ))

test("guide-examples/plots/SineStressTest", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <SineStressTest />
    </TestContextProvider>
  ))

test("guide-examples/plots/TwistyBoi", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <TwistyBoi />
    </TestContextProvider>
  ))

test("guide-examples/utility/SimpleTransform", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <SimpleTransform />
    </TestContextProvider>
  ))

test("guide-examples/display/coordinates/CartesianCoordinatesConfigExample", async ({
  mount,
  page,
}) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <CartesianCoordinatesConfigExample />
    </TestContextProvider>
  ))

test("guide-examples/display/coordinates/CartesianCoordinatesExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <CartesianCoordinatesExample />
    </TestContextProvider>
  ))

test("guide-examples/display/coordinates/PolarCoordinatesExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <PolarCoordinatesExample />
    </TestContextProvider>
  ))

test("guide-examples/display/vectors/VectorExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <VectorExample />
    </TestContextProvider>
  ))

test("guide-examples/display/viewbox/ContainViewbox", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <ContainViewbox />
    </TestContextProvider>
  ))

test("guide-examples/display/viewbox/StretchViewbox", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <StretchViewbox />
    </TestContextProvider>
  ))

test("guide-examples/display/viewbox/ZoomExample", async ({ mount, page }) =>
  await visualTest(
    mount,
    page,
    <TestContextProvider value={{ overrideHeight: 500 }}>
      <ZoomExample />
    </TestContextProvider>
  ))
