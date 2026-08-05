// Community resource data for The Samaritan Inn, McKinney TX.
//
// EVERY phone number and address here was taken from the organization's own
// website or a public directory in August 2026. Sources are listed in
// SOURCES.md. Hours change often -- see VERIFIED_ON and the "call ahead"
// notice that gets printed on every sheet.
//
// To edit this list you only need to change this file. Nothing else.

export const VERIFIED_ON = 'August 5, 2026'

export const HOME_BASE = {
  name: 'The Samaritan Inn',
  address: '1514 N. McDonald St., McKinney, TX 75071',
  phone: '(972) 542-5302',
}

// The questions on screen. `id` values are what resources match against.
export const SITUATIONS = [
  { id: 'senior', label: 'Senior (60 or older)' },
  { id: 'safety', label: 'Unsafe at home / abuse' },
  { id: 'family', label: 'Has children with them' },
  { id: 'veteran', label: 'Veteran' },
  { id: 'youth', label: 'Young person under 22' },
  { id: 'disability', label: 'Has a disability' },
  { id: 'homeless', label: 'No place to stay tonight' },
]

export const NEEDS = [
  { id: 'food', label: 'Food' },
  { id: 'shelter', label: 'A place to stay' },
  { id: 'rentutility', label: 'Help with rent or bills' },
  { id: 'medical', label: 'Doctor or dentist' },
  { id: 'mental', label: 'Someone to talk to' },
  { id: 'legal', label: 'Legal help' },
  { id: 'clothing', label: 'Clothes or household items' },
  { id: 'benefits', label: 'Food stamps / Medicaid' },
  { id: 'transport', label: 'A ride' },
]

// Always printed at the top of the sheet, no matter what is selected.
export const EMERGENCY = [
  { name: 'Emergency', phone: '911', when: 'You are in danger right now, or someone is hurt' },
  { name: 'Suicide & Crisis Lifeline', phone: '988', when: 'You are thinking about hurting yourself, or in a mental health crisis. Free, 24 hours' },
  { name: '2-1-1 Texas', phone: '211', when: 'You are not sure who to call. They can look up any kind of help in Texas. Free, 24 hours' },
]

export const RESOURCES = [
  {
    id: 'saminn',
    name: 'The Samaritan Inn',
    category: 'Shelter & housing',
    what: 'Shelter for men, women, and families, plus three meals a day and a program to help you get back into your own housing.',
    address: '1514 N. McDonald St., McKinney, TX 75071',
    phone: '(972) 542-5302',
    hours: 'Call for current intake times',
    notes: 'This is where you are now. Ask the front desk about starting an intake interview.',
    website: 'saminn.org',
    needs: ['shelter'],
    situations: ['homeless', 'family'],
    priority: 1,
  },
  {
    id: 'saminn-pantry',
    name: 'The Samaritan Inn Food Pantry',
    category: 'Food',
    what: 'Free groceries. You pick out your own food.',
    address: '1601 N. Waddill St., McKinney, TX 75069',
    phone: '(972) 542-5302',
    hours: 'Tue, Wed, Thu 10:00 AM - 2:45 PM (closed 1:00-1:30 PM). Fri 9:00 AM - 1:45 PM',
    notes: 'Bring a photo ID and something with your address on it (a lease or a bill). A picture on your phone is fine. If you have no address, that is OK - come anyway. Serves McKinney, Anna, Celina, Princeton, Prosper, Melissa, Farmersville and nearby towns.',
    website: 'saminn.org/food-pantry',
    needs: ['food'],
    situations: [],
    priority: 2,
  },
  {
    id: 'cfp-mckinney',
    name: 'Community Food Pantry of McKinney',
    category: 'Food',
    what: 'Free groceries and personal hygiene items. Set up like a small grocery store so you can choose what your family will eat.',
    address: '307 Smith St., McKinney, TX 75069',
    phone: '(972) 547-4404',
    hours: 'Mon-Wed 11:00 AM - 3:30 PM. Thu 11:00 AM - 6:30 PM. Fri 10:00 AM - 12:30 PM',
    notes: 'Thursday stays open until 6:30 PM if you work during the day.',
    website: 'mckinneyfoodpantry.org',
    needs: ['food'],
    situations: [],
    priority: 3,
  },
  {
    id: 'lifeline',
    name: 'Community Lifeline Center',
    category: 'Food & bills',
    what: 'Food pantry plus help paying bills when money is short.',
    address: '1601 N. Waddill St., Suite 102, McKinney, TX 75069',
    phone: '(972) 542-0020',
    hours: 'Tue & Thu 8:30 - 11:30 AM and 1:00 - 2:30 PM',
    notes: 'Only open two days a week. Call first to make sure they can see you.',
    website: 'communitylifeline.org',
    needs: ['food', 'rentutility'],
    situations: [],
    priority: 4,
  },
  {
    id: 'hopes-door',
    name: "Hope's Door New Beginning Center",
    category: 'Safety from abuse',
    what: 'Free, private help if someone is hurting you or scaring you. They have a 24-hour phone line, an emergency shelter, counseling, and help with court and protective orders.',
    address: 'Shelter address is kept secret for safety. Call the hotline first.',
    phone: '(972) 276-0057',
    phoneLabel: '24-hour hotline',
    altPhone: '(972) 422-2911',
    altPhoneLabel: 'Outreach office',
    hours: 'Hotline answers 24 hours a day, every day',
    notes: 'You can call just to talk through your options. You do not have to leave home to get help. They serve all of Collin County.',
    website: 'hdnbc.org',
    needs: ['shelter'],
    situations: ['safety'],
    priority: 1,
  },
  {
    id: 'natl-dv',
    name: 'National Domestic Violence Hotline',
    category: 'Safety from abuse',
    what: 'Free and private. Someone to talk to any time, day or night, anywhere in the country.',
    address: 'Phone and online chat only',
    phone: '(800) 799-7233',
    hours: '24 hours a day, every day',
    notes: 'Also text START to 88788. They can talk in many languages.',
    website: 'thehotline.org',
    needs: [],
    situations: ['safety'],
    priority: 2,
  },
  {
    id: 'lifepath',
    name: 'LifePath Systems',
    category: 'Mental health',
    what: 'Counseling, mental health care, and help with addiction for Collin County. They have a crisis team that can come to you.',
    address: '1515 Heritage Dr., McKinney, TX 75069',
    phone: '(877) 422-5939',
    phoneLabel: '24-hour crisis line',
    hours: 'Crisis line answers 24 hours a day. Office hours vary - call.',
    notes: 'This is the county mental health office. They help whether or not you can pay.',
    website: 'lifepathsystems.org',
    needs: ['mental'],
    situations: [],
    priority: 1,
  },
  {
    id: 'assistance-center',
    name: 'Assistance Center of Collin County',
    category: 'Rent & bills',
    what: 'Can pay up to three months of rent or utility bills if you hit a rough patch.',
    address: '900 18th St., Plano, TX 75074',
    phone: '(972) 422-1850',
    phoneLabel: 'Assistance line',
    altPhone: '(972) 422-1125',
    altPhoneLabel: 'Office',
    hours: 'Call Mon-Thu 9:00 AM - 3:00 PM',
    notes: 'You must call first - do not just show up. If they can help, they will set up a time for you to come in. You need to live in Collin County.',
    website: 'assistancecenter.org',
    needs: ['rentutility'],
    situations: [],
    priority: 1,
  },
  {
    id: 'salvation-army',
    name: 'Salvation Army of McKinney',
    category: 'Food, bills & clothing',
    what: 'Food, clothing, and help with rent and utility bills for families with low income.',
    address: '600 Wilson Creek Pkwy, McKinney, TX 75069',
    phone: '(972) 542-6694',
    hours: 'Call for current hours',
    notes: '',
    website: 'salvationarmyntx.org',
    needs: ['food', 'rentutility', 'clothing'],
    situations: [],
    priority: 5,
  },
  {
    id: 'inn-style',
    name: 'Inn Style Resale Store (The Samaritan Inn)',
    category: 'Clothing & household',
    what: 'Low-cost clothes, furniture, and things for the house.',
    address: '1601 N. Waddill St., McKinney, TX 75069',
    phone: '(972) 542-5302',
    hours: 'Tue-Fri 9:00 AM - 5:00 PM',
    notes: 'Ask your case worker whether you can get a voucher.',
    website: 'saminn.org',
    needs: ['clothing'],
    situations: [],
    priority: 6,
  },
  {
    id: 'community-health-clinic',
    name: 'Community Health Clinic',
    category: 'Medical',
    what: 'Free doctor visits for adults and children with no insurance. Regular check-ups, diabetes, asthma, women\'s exams, school physicals, and help getting medicine.',
    address: '4510 Medical Center Dr., Suite 204, McKinney, TX 75069',
    phone: '(972) 547-0606',
    hours: 'Call for an appointment',
    notes: 'For people in northern Collin County with no insurance and low income. Does not cover Plano or Wylie residents.',
    website: 'chc-mckinney.com',
    needs: ['medical'],
    situations: [],
    priority: 1,
  },
  {
    id: 'hsnt',
    name: 'Health Services of North Texas',
    category: 'Medical',
    what: 'Regular doctor care, HIV care, medicine, counseling, and help with rides to appointments. They charge based on what you can afford.',
    address: '5501 Independence Pkwy, Suite 110, Plano, TX 75023',
    phone: '(940) 381-1501',
    altPhone: '(800) 974-2437',
    altPhoneLabel: 'Toll free',
    hours: 'Call for an appointment',
    notes: 'They serve Collin County residents.',
    website: 'healthservicesntx.org',
    needs: ['medical'],
    situations: [],
    priority: 3,
  },
  {
    id: 'legal-aid',
    name: 'Legal Aid of NorthWest Texas',
    category: 'Legal help',
    what: 'Free lawyers for people who cannot afford one. They help with eviction, custody, protective orders, benefits that got cut off, and other non-criminal problems.',
    address: '901 N. McDonald St., McKinney, TX 75069',
    phone: '(972) 542-9405',
    phoneLabel: 'McKinney office',
    altPhone: '(888) 529-5277',
    altPhoneLabel: 'Legal Aid Line',
    hours: 'Call for office hours and walk-in clinic times',
    notes: 'They hold walk-in clinics at the Collin County courthouse each week. The McKinney office is a short distance down the same street as The Samaritan Inn.',
    website: 'legalaidtx.org',
    needs: ['legal'],
    situations: [],
    priority: 1,
  },
  {
    id: 'meals-on-wheels',
    name: 'Collin County Committee on Aging / Meals on Wheels',
    category: 'Senior services',
    what: 'A hot meal delivered to your home every weekday if you cannot easily get out. They also help seniors figure out what other benefits they qualify for.',
    address: '600 N. Tennessee St., McKinney, TX 75069',
    phone: '(972) 562-6996',
    hours: 'Meals delivered Mon-Fri at midday',
    notes: 'They also serve lunch at the McKinney Senior Recreation Center weekdays at 11:00 AM - sign up ahead by calling (972) 547-7491. Suggested donation for age 60+.',
    website: 'cccoaweb.org',
    needs: ['food'],
    situations: ['senior'],
    priority: 1,
  },
  {
    id: 'collin-transit',
    name: 'Collin County Transit (DART)',
    category: 'Transportation',
    what: 'Low-cost shared rides to the grocery store, the doctor, the senior center, and other places around town.',
    address: 'Rides are booked by phone or the GoPass app',
    phone: '(214) 979-1111',
    altPhone: '(469) 771-0667',
    altPhoneLabel: 'To find out if you qualify',
    hours: 'Call for service hours',
    notes: 'For people 65 or older, people with a disability, or people with low income who live in McKinney, Celina, Lowry Crossing, Melissa, Princeton, or Prosper. You have to sign up before your first ride, so call early.',
    website: 'dart.org',
    needs: ['transport'],
    situations: ['senior', 'disability'],
    priority: 1,
  },
  {
    id: 'city-house',
    name: 'City House',
    category: 'Youth services',
    what: 'The only place in Collin County that shelters children and young people on their own. Emergency shelter for ages 0-22, housing for young adults 18-21, plus food, showers, laundry, and bus passes at their resource center.',
    address: '902 E. 16th St., Plano, TX 75074',
    phone: '(972) 424-4626',
    altPhone: '(972) 971-0278',
    altPhoneLabel: 'After 5:00 PM',
    hours: 'Resource center weekdays 10:00 AM - 4:00 PM. Shelter staffed 24 hours.',
    notes: 'They try hard to keep brothers and sisters together.',
    website: 'cityhouse.org',
    needs: ['shelter'],
    situations: ['youth'],
    priority: 1,
  },
  {
    id: 'veterans',
    name: 'Collin County Veterans Services Office',
    category: 'Veteran services',
    what: 'Free help filing for VA benefits you earned - disability payments, health care, pension, and survivor benefits.',
    address: '900 E. Park Blvd., Plano, TX 75074',
    phone: '(972) 881-3060',
    hours: 'Mon-Fri 8:00 AM - 12:00 PM and 1:00 PM onward',
    notes: 'Bring your DD-214 discharge paper if you have it. If you do not have it, they can help you request a copy.',
    website: 'collincountytx.gov',
    needs: [],
    situations: ['veteran'],
    priority: 1,
  },
  {
    id: 'benefits-211',
    name: 'Your Texas Benefits (through 2-1-1)',
    category: 'Food stamps & Medicaid',
    what: 'Apply for SNAP (food stamps), Medicaid, CHIP children\'s insurance, and TANF cash help.',
    address: 'Apply by phone or online at YourTexasBenefits.com',
    phone: '211',
    altPhone: '(877) 541-7905',
    altPhoneLabel: 'If 211 will not connect',
    hours: '24 hours a day, every day',
    notes: 'When you call, pick your language, then press 2. Ask a case worker here to help you apply if the phone menu is confusing.',
    website: 'YourTexasBenefits.com',
    needs: ['benefits', 'food'],
    situations: [],
    priority: 2,
  },
]

// Builds a Google Maps link that gives real turn-by-turn directions from The
// Samaritan Inn to the resource. We do not write out driving directions by
// hand -- guessing street turns would be worse than useless for someone
// standing at a bus stop.
export function directionsUrl(resource) {
  if (!resource.address || !/\d/.test(resource.address)) return null
  return (
    'https://www.google.com/maps/dir/?api=1&origin=' +
    encodeURIComponent(HOME_BASE.address) +
    '&destination=' +
    encodeURIComponent(resource.address)
  )
}

// Picks the resources that match what the case worker checked off.
// A resource is included when it matches ANY selected need or situation.
export function matchResources(selectedNeeds, selectedSituations) {
  const needs = new Set(selectedNeeds)
  const situations = new Set(selectedSituations)

  return RESOURCES.filter((r) => {
    const needHit = r.needs.some((n) => needs.has(n))
    const situationHit = r.situations.some((s) => situations.has(s))
    return needHit || situationHit
  }).sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category)
    return a.priority - b.priority
  })
}
