export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "antibiotics", label: "Antibiotics" },
      { id: "pain-relief", label: "Pain Relief" },
      { id: "cold-flu", label: "Cold & Flu" },
      { id: "digestive", label: "Digestive Health" },
      { id: "allergy", label: "Allergy Medications" },
      { id: "vitamins", label: "Vitamins & Supplements" }, // added vitamins
      { id: "skin-care", label: "Skin Care" }, // added skin care
      { id: "medical-equipment", label: "Medical Equipment" }, // added medical equipment
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "pfizer", label: "Pfizer" }, // changed to pharma brands
      { id: "johnson-johnson", label: "Johnson & Johnson" }, // changed to pharma brands
      { id: "merck", label: "Merck" }, // changed to pharma brands
      { id: "novartis", label: "Novartis" }, // changed to pharma brands
      { id: "abbvie", label: "AbbVie" }, // changed to pharma brands
      { id: "sanofi", label: "Sanofi" }, // changed to pharma brands
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "antibiotics",
    label: "Antibiotics",
    path: "/shop/listing",
  },
  {
    id: "pain-relief",
    label: "Pain Relief",
    path: "/shop/listing",
  },
  {
    id: "cold-flu",
    label: "Cold & Flu",
    path: "/shop/listing",
  },
  {
    id: "digestive",
    label: "Digestive Health",
    path: "/shop/listing",
  },
  {
    id: "allergy",
    label: "Allergy Medications",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  antibiotics: "Antibiotics",
  "pain-relief": "Pain Relief",
  "cold-flu": "Cold & Flu",
  digestive: "Digestive Health",
  allergy: "Allergy Medications",
  "vitamins": "Vitamins & Supplements", // added
  "skin-care": "Skin Care", // added
  "medical-equipment": "Medical Equipment", // added
};

export const brandOptionsMap = {
  pfizer: "Pfizer", // changed to pharma brand
  "johnson-johnson": "Johnson & Johnson", // changed to pharma brand
  merck: "Merck", // changed to pharma brand
  novartis: "Novartis", // changed to pharma brand
  abbvie: "AbbVie", // changed to pharma brand
  sanofi: "Sanofi", // changed to pharma brand
};

export const filterOptions = {
  category: [
    { id: "antibiotics", label: "Antibiotics" },
    { id: "pain-relief", label: "Pain Relief" },
    { id: "cold-flu", label: "Cold & Flu" },
    { id: "digestive", label: "Digestive Health" },
    { id: "allergy", label: "Allergy Medications" },
    { id: "vitamins", label: "Vitamins & Supplements" }, // added
    { id: "skin-care", label: "Skin Care" }, // added
    { id: "medical-equipment", label: "Medical Equipment" }, // added
  ],
  brand: [
    { id: "pfizer", label: "Pfizer" }, // changed to pharma brand
    { id: "johnson-johnson", label: "Johnson & Johnson" }, // changed to pharma brand
    { id: "merck", label: "Merck" }, // changed to pharma brand
    { id: "novartis", label: "Novartis" }, // changed to pharma brand
    { id: "abbvie", label: "AbbVie" }, // changed to pharma brand
    { id: "sanofi", label: "Sanofi" }, // changed to pharma brand
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
