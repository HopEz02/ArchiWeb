// Contact details panel for the /contact page. Pairs with the message
// form in a two-column layout (see app/contact/page.tsx). Icons are
// inline SVG rather than an icon-library dependency, per the working
// agreement to avoid adding packages without approval.

type ContactItem = {
  label: string;
  value: string;
};

const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "Call us",
    // TODO(content): replace with the real studio phone number.
    value: "[TODO: phone number]",
  },
  {
    label: "Location",
    // TODO(content): replace with the real studio address.
    value: "[TODO: studio address]",
  },
  {
    label: "Business hours",
    // TODO(content): replace with real opening hours.
    value: "[TODO: opening hours]",
  },
];

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M12 21s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

const ICONS = [PhoneIcon, LocationIcon, ClockIcon];

export function ContactInfo() {
  return (
    <div className="bg-cream p-xl md:p-3xl">
      <h2 className="text-[24px]">Contact details</h2>
      <ul className="mt-xl space-y-xl">
        {CONTACT_ITEMS.map((item, index) => {
          const Icon = ICONS[index];
          return (
            <li key={item.label} className="flex gap-md">
              <span aria-hidden="true" className="mt-[2px] text-gold">
                <Icon />
              </span>
              <div>
                <h3 className="font-body text-[16px] font-semibold text-navy">
                  {item.label}
                </h3>
                <p className="mt-xs text-[15px] text-charcoal">{item.value}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
