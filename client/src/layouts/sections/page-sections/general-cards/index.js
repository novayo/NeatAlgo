
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// GeneralCards page components
import CardRaised from "layouts/sections/page-sections/general-cards/components/CardRaised";
import CardImageInside from "layouts/sections/page-sections/general-cards/components/CardImageInside";
import CardWithColoredShadow from "layouts/sections/page-sections/general-cards/components/CardWithColoredShadow";
import CardRotate from "layouts/sections/page-sections/general-cards/components/CardRotate";
import CardPricing from "layouts/sections/page-sections/general-cards/components/CardPricing";

// GeneralCards page components code
import cardRaisedCode from "layouts/sections/page-sections/general-cards/components/CardRaised/code";
import cardImageInsideCode from "layouts/sections/page-sections/general-cards/components/CardImageInside/code";
import cardWithColoredShadowCode from "layouts/sections/page-sections/general-cards/components/CardWithColoredShadow/code";
import cardRotateCode from "layouts/sections/page-sections/general-cards/components/CardRotate/code";
import cardPricingCode from "layouts/sections/page-sections/general-cards/components/CardPricing/code";

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
