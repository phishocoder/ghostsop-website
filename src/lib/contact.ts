export type ContactFormValues = {
  name: string;
  email: string;
  businessType: string;
  websiteOrInstagram?: string;
  biggestProblem: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const trimValue = (value: string | undefined) => value?.trim() ?? "";

export function normalizeContactForm(values: ContactFormValues): ContactFormValues {
  return {
    name: trimValue(values.name),
    email: trimValue(values.email).toLowerCase(),
    businessType: trimValue(values.businessType),
    websiteOrInstagram: trimValue(values.websiteOrInstagram),
    biggestProblem: trimValue(values.biggestProblem),
  };
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const normalized = normalizeContactForm(values);
  const errors: ContactFormErrors = {};

  if (!normalized.name || normalized.name.length < 2) {
    errors.name = "Enter your name.";
  }

  if (!normalized.email || !emailPattern.test(normalized.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!normalized.businessType) {
    errors.businessType = "Choose your business type.";
  }

  if (!normalized.biggestProblem || normalized.biggestProblem.length < 20) {
    errors.biggestProblem = "Describe the lead handling problem in a bit more detail.";
  }

  if (
    normalized.websiteOrInstagram &&
    normalized.websiteOrInstagram.length > 0 &&
    normalized.websiteOrInstagram.length < 4
  ) {
    errors.websiteOrInstagram = "Enter a valid website or Instagram handle, or leave it blank.";
  }

  return errors;
}

export function hasContactFormErrors(errors: ContactFormErrors) {
  return Object.keys(errors).length > 0;
}
