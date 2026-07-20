import Script from "next/script";
import { BRAND } from "@/lib/market";

const FORM_ID = BRAND.formId;
const iframeId = `inline-${FORM_ID}`;

export default function LeadForm() {
  return (
    <section className="section" id="contact" aria-labelledby="form-hl">
      <div className="container">
        <div className="form-layout">
          <div className="form-copy">
            <p className="eyebrow">Reserve your slot</p>
            <h2 id="form-hl">Ready to be in every mailbox on the route?</h2>
            <p>
              Fill out the form and we&apos;ll reach out within one business day to
              confirm your category and walk through next steps.
            </p>
            <div className="form-note">
              <strong>Note your slot type.</strong> In the form, tell us whether you
              want a Standard slot ($300) or Special slot ($500). We&apos;ll confirm
              availability when we follow up.
            </div>
            <div className="form-note clay">
              <strong>One per category.</strong> Slots are first-come, first-served.
              Submitting this form holds your spot — nothing is charged until both
              sides confirm.
            </div>
          </div>

          <div className="form-embed">
            <iframe
              src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
              id={iframeId}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Mailer Form"
              data-height="1093"
              data-layout-iframe-id={iframeId}
              data-form-id={FORM_ID}
              title="Reserve a Slot — The Mesa Mailer"
            />
          </div>
        </div>
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
