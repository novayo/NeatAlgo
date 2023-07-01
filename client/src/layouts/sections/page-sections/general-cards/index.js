
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// GeneralCards page components
import CardImageInside from "layouts/sections/page-sections/general-cards/components/CardImageInside";
import CardPricing from "layouts/sections/page-sections/general-cards/components/CardPricing";
import CardRaised from "layouts/sections/page-sections/general-cards/components/CardRaised";
import CardRotate from "layouts/sections/page-sections/general-cards/components/CardRotate";
import CardWithColoredShadow from "layouts/sections/page-sections/general-cards/components/CardWithColoredShadow";

// GeneralCards page components code
import cardImageInsideCode from "layouts/sections/page-sections/general-cards/components/CardImageInside/code";
import cardPricingCode from "layouts/sections/page-sections/general-cards/components/CardPricing/code";
import cardRaisedCode from "layouts/sections/page-sections/general-cards/components/CardRaised/code";
import cardRotateCode from "layouts/sections/page-sections/general-cards/components/CardRotate/code";
import cardWithColoredShadowCode from "layouts/sections/page-sections/general-cards/components/CardWithColoredShadow/code";

function GeneralCards() {
  return (
    <BaseLayout
      title="General Cards"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/general-cards" },
        { label: "General Cards" },
      ]}
    >
      <View title="Card Raised" code={cardRaisedCode}>
        <CardRaised />
      </View>
      <View title="Card image inside" code={cardImageInsideCode}>
        <CardImageInside />
      </View>
      <View title="Card with colored shadow" code={cardWithColoredShadowCode}>
        <CardWithColoredShadow />
      </View>
      <View title="Card rotate" code={cardRotateCode}>
        <CardRotate />
      </View>
      <View title="Card pricing" code={cardPricingCode}>
        <CardPricing />
      </View>
    </BaseLayout>
  );
}

export default GeneralCards;
