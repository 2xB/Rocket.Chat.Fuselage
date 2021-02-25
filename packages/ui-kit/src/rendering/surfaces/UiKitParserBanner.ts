import { LayoutBlockType } from '../../blocks/LayoutBlockType';
import { BaseSurfaceRenderer } from '../BaseSurfaceRenderer';

export abstract class UiKitParserBanner<
  OutputElement
> extends BaseSurfaceRenderer<OutputElement> {
  public constructor() {
    super([
      LayoutBlockType.ACTIONS,
      LayoutBlockType.CONTEXT,
      LayoutBlockType.DIVIDER,
      LayoutBlockType.IMAGE,
      LayoutBlockType.INPUT,
      LayoutBlockType.SECTION,
    ]);
  }
}