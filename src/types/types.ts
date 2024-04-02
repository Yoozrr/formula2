export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The UUID scalar type represents a UUID. */
  UUID: any;
  /**
   * A limited string. Has to be between 3 and 3 characters long. May only contain
   * the following characters: ABCDEFGHIJKLMNOPQRSTUVWXYZ
   */
  LimitedString: any;
  /**
   * A limited string. Has to be between 2 and 2 characters long. May only contain
   * the following characters: ABCDEFGHIJKLMNOPQRSTUVWXYZ
   */
  LimitedString2: any;
  /** The Email scalar type represents E-Mail addresses compliant to RFC 822. */
  Email: any;
  /** The DateTime scalar type represents date time strings complying to ISO-8601. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A limited string. Has to be between 2 and 8 characters long. */
  LimitedString3: any;
  Date: any;
  /** A password string. Has to be between 3 and 24 characters long. */
  Password: any;
  CountryAlpha2: any;
  CountryAlpha3: any;
  LanguageCode: any;
  /** The URL scalar type represents URL addresses. */
  URL: any;
};


export enum AccountType {
  Debtor = 'debtor',
  Creditor = 'creditor'
}

export type ActionTemplate = VoucherTemplate | RequestTemplate | BookingDocumentTemplate;

export type AddAddressInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<AddressType>>>;
  status?: Maybe<AddressStatus>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  areaCode?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AddressTags>>>;
  location?: Maybe<Array<Maybe<Scalars['Float']>>>;
  plusCode?: Maybe<Scalars['String']>;
  placeId?: Maybe<Scalars['String']>;
  countryAlpha3?: Maybe<Scalars['String']>;
  companyUuid?: Maybe<Scalars['UUID']>;
};

export type AddChargeItemCodeInput = {
  chargeItemUuid: Scalars['UUID'];
  type: ChargeItemCodeType;
  glCodeUuid: Scalars['UUID'];
};

export type AddChargeItemInput = {
  uuid: Scalars['UUID'];
  code: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  unit: Scalars['String'];
  sequence?: Maybe<Scalars['String']>;
  status: ChargeItemStatus;
  rateType?: Maybe<ChargeRateType>;
  sellTaxUuid?: Maybe<Scalars['UUID']>;
  sellRate?: Maybe<Scalars['Float']>;
  sellCurrencyUuid?: Maybe<Scalars['UUID']>;
  revenueCodeUuid?: Maybe<Scalars['UUID']>;
  costTaxUuid?: Maybe<Scalars['UUID']>;
  costRate?: Maybe<Scalars['Float']>;
  costCurrencyUuid?: Maybe<Scalars['UUID']>;
  expenseCodeUuid?: Maybe<Scalars['UUID']>;
  term?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<ChargeItemTagType>>>;
};

export type AddChargeItemTaxInput = {
  chargeItemUuid: Scalars['UUID'];
  type: ChargeItemTaxType;
  rate?: Maybe<Scalars['Float']>;
  rateType?: Maybe<ChargeRateType>;
  taxUuid: Scalars['UUID'];
};

export type AddContactInput = {
  uuid: Scalars['UUID'];
  status?: Maybe<ContactStatus>;
  companyUuid: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
};

export type AddCostItemInput = {
  uuid?: Maybe<Scalars['UUID']>;
  bookingUuid: Scalars['UUID'];
  chargeItemUuid: Scalars['UUID'];
  accrual?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
  quantity: Scalars['Float'];
  sellCurrencyUuid: Scalars['UUID'];
  sellExchangeRate: Scalars['Float'];
  sellBaseRate: Scalars['Float'];
  costCurrencyUuid: Scalars['UUID'];
  costExchangeRate: Scalars['Float'];
  costBaseRate: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
};

export type AddEntityAddressInput = {
  name: Scalars['String'];
  type: Array<Maybe<AddressType>>;
  status?: Maybe<AddressStatus>;
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  areaCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AddressTags>>>;
  location?: Maybe<Array<Scalars['Float']>>;
  countryAlpha3: Scalars['LimitedString'];
  companyUuid?: Maybe<Scalars['UUID']>;
};

export type AddEntityDocumentInput = {
  baseCompanyUuid: Scalars['UUID'];
  entityType: EntityType;
  category: Scalars['String'];
  entityUuid: Scalars['UUID'];
  id: Scalars['String'];
  fields?: Maybe<Array<Maybe<EntityFieldInput>>>;
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  status: DocumentStatus;
  uploadUuid?: Maybe<Scalars['UUID']>;
};

export type AddJobInput = {
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  no?: Maybe<Scalars['String']>;
  reference?: Maybe<JobReferencesInput>;
  details?: Maybe<Scalars['JSON']>;
  remarks?: Maybe<Scalars['String']>;
  trips?: Maybe<Array<Maybe<JobTripUpdateInput>>>;
};

export type AddLegInput = {
  _id?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  yardUuid?: Maybe<Scalars['UUID']>;
  address?: Maybe<AddAddressInput>;
  addAfterSequence?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['String']>;
};

export type AddLegsInput = {
  legUuid?: Maybe<Scalars['UUID']>;
  startOut?: Maybe<Scalars['DateTime']>;
  endOut?: Maybe<Scalars['DateTime']>;
  startLocation?: Maybe<ManifestLocationInput>;
  endLocation?: Maybe<ManifestLocationInput>;
  complete?: Maybe<Scalars['Boolean']>;
};

export type AddManifestInput = {
  uuid?: Maybe<Scalars['UUID']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
};

export type AddManifestLegsInput = {
  manifestUuid?: Maybe<Scalars['UUID']>;
  location?: Maybe<ManifestLocationInput>;
  legs?: Maybe<Array<Maybe<AddLegsInput>>>;
};

export type AddManifestTripsInput = {
  manifestUuid?: Maybe<Scalars['UUID']>;
  location?: Maybe<ManifestLocationInput>;
  start?: Maybe<Scalars['DateTime']>;
  startOut?: Maybe<Scalars['DateTime']>;
  waybillIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AddPaymentInput = {
  reference: Scalars['String'];
  transactionType: PaymentTransactionType;
  remarks?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  voucherPayments: Array<Maybe<AddVoucherPaymentInput>>;
};

export type Address = {
  __typename?: 'Address';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<AddressStatus>;
  type?: Maybe<Array<Maybe<AddressType>>>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  areaCode?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AddressTags>>>;
  location?: Maybe<Geometry>;
  plusCode?: Maybe<Scalars['String']>;
  placeId?: Maybe<Scalars['String']>;
  countryAlpha3?: Maybe<Scalars['LimitedString']>;
  company?: Maybe<Company>;
  companyUuid?: Maybe<Scalars['UUID']>;
};

export type Addresses = {
  __typename?: 'Addresses';
  rows?: Maybe<Array<Maybe<Address>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type AddressInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<AddressStatus>;
  type?: Maybe<Array<Maybe<AddressType>>>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  placeId?: Maybe<Scalars['String']>;
  plusCode?: Maybe<Scalars['String']>;
  areaCode?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AddressTags>>>;
  location?: Maybe<LocationInput>;
  countryAlpha3?: Maybe<Scalars['LimitedString']>;
  companyUuid?: Maybe<Scalars['UUID']>;
};

export enum AddressStatus {
  Activated = 'activated',
  Deleted = 'deleted'
}

export enum AddressTags {
  IsDefault = 'isDefault'
}

export enum AddressType {
  Billing = 'BILLING',
  Delivery = 'DELIVERY',
  Warehouse = 'WAREHOUSE',
  Contact = 'CONTACT',
  Mailing = 'MAILING'
}

export type AddVoucherItemInput = {
  uuid?: Maybe<Scalars['UUID']>;
  voucherUuid: Scalars['UUID'];
  costItemUuid: Scalars['UUID'];
  currencyUuid: Scalars['UUID'];
  quantity: Scalars['Float'];
  baseRate: Scalars['Float'];
  exchangeRate: Scalars['Float'];
  localExchangeRate: Scalars['Float'];
  unit?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  taxUuid: Scalars['UUID'];
  taxPercentage: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  voucherItemCnUuid?: Maybe<Scalars['UUID']>;
};

export type AddVoucherItemViaVoucherInput = {
  uuid?: Maybe<Scalars['UUID']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  costItemUuid: Scalars['UUID'];
  currencyUuid: Scalars['UUID'];
  baseRate: Scalars['Float'];
  rate?: Maybe<Scalars['Float']>;
  exchangeRate: Scalars['Float'];
  localExchangeRate: Scalars['Float'];
  unit?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  quantity: Scalars['Float'];
  taxUuid: Scalars['UUID'];
  taxPercentage: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  voucherItemCnUuid?: Maybe<Scalars['UUID']>;
};

export type AddVoucherPaymentInput = {
  voucherUuid: Scalars['UUID'];
  amount: Scalars['Float'];
};

export type Approval = {
  __typename?: 'Approval';
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<ApprovalStatus>;
  voucher?: Maybe<Voucher>;
  bookingDocument?: Maybe<BookingDocument>;
  request?: Maybe<Request>;
  approvedBy?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type ApprovalInput = {
  type: Scalars['String'];
  voucherUuid?: Maybe<Scalars['UUID']>;
  requestUuid?: Maybe<Scalars['UUID']>;
};

export type Approvals = {
  __typename?: 'Approvals';
  rows?: Maybe<Array<Maybe<Approval>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum ApprovalStatus {
  Pending = 'PENDING',
  Submitted = 'SUBMITTED',
  Approved = 'APPROVED',
  Rejected = 'REJECTED'
}

export type Assignee = {
  __typename?: 'Assignee';
  user?: Maybe<User>;
  type?: Maybe<BookingAssignmentType>;
  uuid?: Maybe<Scalars['UUID']>;
};

export type AssignPortalCompanyInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  reportUuid?: Maybe<Scalars['UUID']>;
  portalCompanyUuid?: Maybe<Scalars['UUID']>;
  hours?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Attachment = {
  __typename?: 'Attachment';
  uuid?: Maybe<Scalars['UUID']>;
  key?: Maybe<Scalars['String']>;
  eTag?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Auth = {
  __typename?: 'Auth';
  auth0Token: Scalars['String'];
  auth0UserId: Scalars['String'];
};

export type Auth0 = {
  token: Scalars['String'];
};

export type AuthProvider = {
  auth0?: Maybe<Auth0>;
};

export type AvailabilitiesResults = {
  __typename?: 'AvailabilitiesResults';
  rows?: Maybe<Array<Maybe<Availability>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type Availability = {
  __typename?: 'Availability';
  date?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Array<Maybe<EntityDetails>>>;
  type?: Maybe<EntityType>;
  status?: Maybe<AvailabilityStatus>;
  count?: Maybe<Scalars['Int']>;
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
  uuid?: Maybe<Scalars['UUID']>;
};

export enum AvailabilityStatus {
  Available = 'AVAILABLE',
  Mc = 'MC',
  Repair = 'REPAIR',
  Unavailable = 'UNAVAILABLE'
}

export type BaseCompanies = {
  __typename?: 'BaseCompanies';
  rows?: Maybe<Array<Maybe<BaseCompany>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type BaseCompany = {
  __typename?: 'BaseCompany';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  shortCode?: Maybe<Scalars['String']>;
  registration?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<CompanyType>>>;
  status?: Maybe<CompanyStatus>;
  details?: Maybe<BaseCompanyDetails>;
  timezone?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  logo?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  company?: Maybe<Company>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  groups?: Maybe<Array<Maybe<Group>>>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
  settings?: Maybe<Array<Maybe<BaseCompanySetting>>>;
  subscription?: Maybe<CompanySubscriptionType>;
  entityRequirements?: Maybe<EntityRequirements>;
  entityExceptions?: Maybe<EntityExceptions>;
};

export type BaseCompanyDetails = {
  __typename?: 'BaseCompanyDetails';
  userTimeout?: Maybe<Scalars['Int']>;
};

export type BaseCompanyDetailsInput = {
  userTimeout?: Maybe<Scalars['Int']>;
};

export type BaseCompanySetting = {
  __typename?: 'BaseCompanySetting';
  uuid?: Maybe<Scalars['UUID']>;
  key?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  setting?: Maybe<Array<Maybe<Setting>>>;
};

export type BaseCompanySettings = {
  __typename?: 'BaseCompanySettings';
  rows?: Maybe<Array<Maybe<BaseCompanySetting>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type BcSettingAreaCode = {
  __typename?: 'BCSettingAreaCode';
  value?: Maybe<BcSettingAreaCodeInputRequirement>;
};

export enum BcSettingAreaCodeInputRequirement {
  Strict = 'STRICT',
  Optional = 'OPTIONAL',
  Freetext = 'FREETEXT'
}

export type BillingUnit = {
  __typename?: 'BillingUnit';
  uuid?: Maybe<Scalars['UUID']>;
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<BillingUnitStatus>;
};

export type BillingUnits = {
  __typename?: 'BillingUnits';
  rows?: Maybe<Array<Maybe<BillingUnit>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum BillingUnitStatus {
  Activated = 'activated',
  Deleted = 'deleted'
}

export enum Bloodtype {
  APlus = 'APlus',
  AMinus = 'AMinus',
  BPlus = 'BPlus',
  BMinus = 'BMinus',
  OPlus = 'OPlus',
  OMinus = 'OMinus',
  AbPlus = 'ABPlus',
  AbMinus = 'ABMinus'
}

export type Booking = {
  __typename?: 'Booking';
  uuid?: Maybe<Scalars['UUID']>;
  no?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<BookingStatus>;
  state?: Maybe<Array<Maybe<BookingState>>>;
  quotation?: Maybe<Quotation>;
  serviceTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<BookingTagType>>>;
  owner?: Maybe<BaseCompany>;
  company?: Maybe<Company>;
  remarks?: Maybe<Scalars['String']>;
  shipper?: Maybe<Company>;
  shipperAddress?: Maybe<Address>;
  consignee?: Maybe<Company>;
  consigneeAddress?: Maybe<Address>;
  placeOri?: Maybe<Place>;
  placeDest?: Maybe<Place>;
  portOri?: Maybe<Port>;
  portDest?: Maybe<Port>;
  depotOri?: Maybe<Address>;
  depotDest?: Maybe<Address>;
  billTo?: Maybe<Company>;
  haulierOri?: Maybe<Company>;
  haulierDest?: Maybe<Company>;
  forwarderOri?: Maybe<Company>;
  forwarderDest?: Maybe<Company>;
  linerOri?: Maybe<Company>;
  linerDest?: Maybe<Company>;
  liner?: Maybe<Company>;
  warehouse?: Maybe<Company>;
  isCloseOperation?: Maybe<Scalars['Boolean']>;
  isCloseFinance?: Maybe<Scalars['Boolean']>;
  processFlow?: Maybe<Array<Maybe<ProcessFlow>>>;
  companies?: Maybe<Array<Maybe<Company>>>;
  jobs?: Maybe<Array<Maybe<Job>>>;
  chronologies?: Maybe<Array<Maybe<Chronology>>>;
  commodities?: Maybe<Array<Maybe<Scalars['String']>>>;
  events?: Maybe<Array<Maybe<Event>>>;
  requests?: Maybe<Array<Maybe<Request>>>;
  bookingDocuments?: Maybe<Array<Maybe<BookingDocument>>>;
  vouchers?: Maybe<Array<Maybe<Voucher>>>;
  permissions?: Maybe<BookingPermissionType>;
  assignees?: Maybe<Array<Maybe<Assignee>>>;
  costItems?: Maybe<Array<Maybe<CostItem>>>;
  costSheet?: Maybe<CostSheet>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['JSON']>;
  estDrop?: Maybe<Scalars['DateTime']>;
  estPick?: Maybe<Scalars['DateTime']>;
};

export type BookingAssigneeInput = {
  bookingUuid: Scalars['UUID'];
  userUuid?: Maybe<Scalars['UUID']>;
};

export enum BookingAssignmentType {
  Owner = 'owner',
  Shipper = 'shipper',
  Consignee = 'consignee',
  Transporter = 'transporter',
  ForwarderDest = 'forwarderDest',
  ForwarderOri = 'forwarderOri',
  HaulierDest = 'haulierDest',
  HaulierOri = 'haulierOri',
  LinerDest = 'linerDest',
  LinerOri = 'linerOri'
}

export type BookingDocument = {
  __typename?: 'BookingDocument';
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<DocumentStatus>;
  type?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  hardCopyStatus?: Maybe<DocumentHardCopyStatus>;
  location?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  file?: Maybe<Document>;
  document?: Maybe<Document>;
  bookings?: Maybe<Array<Maybe<Booking>>>;
  approvals?: Maybe<Array<Maybe<Approval>>>;
  createdBy?: Maybe<User>;
  verifiedBy?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BookingDocuments = {
  __typename?: 'BookingDocuments';
  rows?: Maybe<Array<Maybe<BookingDocument>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type BookingDocumentTemplate = {
  __typename?: 'BookingDocumentTemplate';
  type?: Maybe<Scalars['String']>;
  approvals?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum BookingDynamicFieldQuery {
  Department = 'DEPARTMENT',
  Quotation = 'QUOTATION',
  Enums = 'ENUMS',
  Port = 'PORT',
  Company = 'COMPANY',
  Place = 'PLACE',
  CustomValues = 'CUSTOM_VALUES'
}

export enum BookingDynamicFieldType {
  Text = 'TEXT',
  Selector = 'SELECTOR',
  Date = 'DATE'
}

export type BookingEvent = {
  __typename?: 'BookingEvent';
  context?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  payload?: Maybe<Scalars['String']>;
  user?: Maybe<EventCreator>;
};

export type BookingEventPayload = {
  __typename?: 'BookingEventPayload';
  companyUuid?: Maybe<Scalars['UUID']>;
  shipperUuid?: Maybe<Scalars['UUID']>;
  forwarderUuid?: Maybe<Scalars['UUID']>;
  haulierUuid?: Maybe<Scalars['UUID']>;
};

export type BookingPermissionType = {
  __typename?: 'BookingPermissionType';
  canImpLinerOverrideIncompleteDocs?: Maybe<Scalars['Boolean']>;
  canImpLinerOverrideDoubleVoucher?: Maybe<Scalars['Boolean']>;
  canImpLinerOverrideDoubleInvoice?: Maybe<Scalars['Boolean']>;
};

export type Bookings = {
  __typename?: 'Bookings';
  rows?: Maybe<Array<Maybe<Booking>>>;
  pageInfo?: Maybe<NumberPagination>;
  facets?: Maybe<Scalars['JSON']>;
};

export enum BookingSearchFacet {
  Status = 'status',
  IsAssigned = 'isAssigned',
  TransDoc = 'transDoc',
  TransComp = 'transComp',
  TransCompAp = 'transCompAp',
  TransCompAr = 'transCompAr',
  TransHlg = 'transHlg'
}

export type BookingsJson = {
  __typename?: 'BookingsJson';
  rows?: Maybe<Scalars['JSON']>;
  pageInfo?: Maybe<NumberPagination>;
  facets?: Maybe<Scalars['JSON']>;
};

export type BookingsSearchFilter = {
  userUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  companyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  departments?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  isAssigned?: Maybe<Scalars['Boolean']>;
  transDoc?: Maybe<Array<Maybe<Scalars['String']>>>;
  transComp?: Maybe<Array<Maybe<Scalars['String']>>>;
  transCompAp?: Maybe<Array<Maybe<Scalars['String']>>>;
  transCompAr?: Maybe<Array<Maybe<Scalars['String']>>>;
  transHlg?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BookingsSearchInput = {
  q?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  facets?: Maybe<Array<Maybe<BookingSearchFacet>>>;
  filter?: Maybe<BookingsSearchFilter>;
  _noSubGraph?: Maybe<Scalars['Boolean']>;
};

export type BookingState = {
  __typename?: 'BookingState';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum BookingStatus {
  Draft = 'DRAFT',
  Submitted = 'SUBMITTED',
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  CloseOperation = 'CLOSE_OPERATION',
  CloseFinance = 'CLOSE_FINANCE',
  Cancelled = 'CANCELLED'
}

export type BookingSummary = {
  __typename?: 'BookingSummary';
  pendingCount?: Maybe<Scalars['Int']>;
};

export enum BookingTagType {
  HouseBl = 'HOUSE_BL',
  HouseBookingConfirmation = 'HOUSE_BOOKING_CONFIRMATION',
  AutoApproveExportCustoms = 'AUTO_APPROVE_EXPORT_CUSTOMS',
  AutoApproveImportCustoms = 'AUTO_APPROVE_IMPORT_CUSTOMS',
  BillOfLadingHold = 'BILL_OF_LADING_HOLD',
  DoorToDoor = 'DOOR_TO_DOOR',
  DoorToPortOri = 'DOOR_TO_PORT_ORI',
  DoorToPortDest = 'DOOR_TO_PORT_DEST',
  PortToPort = 'PORT_TO_PORT',
  PortToDoor = 'PORT_TO_DOOR'
}

export type BookingTransportInput = {
  uuid?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  type: Scalars['String'];
  shipperCode?: Maybe<Scalars['String']>;
  shipperName?: Maybe<Scalars['String']>;
  shipperUuid: Scalars['UUID'];
  shipperAddress: AddressInput;
  shipperTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  consigneeCode?: Maybe<Scalars['String']>;
  consigneeName?: Maybe<Scalars['String']>;
  consigneeUuid: Scalars['UUID'];
  consigneeAddress: AddressInput;
  consigneeTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  billToCode?: Maybe<Scalars['String']>;
  billToName?: Maybe<Scalars['String']>;
  billToUuid?: Maybe<Scalars['UUID']>;
  billToTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  no?: Maybe<Scalars['String']>;
  commodities?: Maybe<Array<Maybe<Scalars['String']>>>;
  details?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  customsDocNo?: Maybe<Scalars['String']>;
  shipperRef?: Maybe<Scalars['String']>;
  consigneeRef?: Maybe<Scalars['String']>;
  bl?: Maybe<Scalars['String']>;
  houseBl?: Maybe<Scalars['String']>;
  shipmentType?: Maybe<Scalars['String']>;
  shippingRef?: Maybe<Scalars['String']>;
  saBookingNo?: Maybe<Scalars['String']>;
  internalRef?: Maybe<Scalars['String']>;
  scn?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<BookingStatus>;
  chronologies?: Maybe<Array<Maybe<ChronologyInput>>>;
  jobs: Array<Maybe<JobInput>>;
};

export type BookingType = {
  __typename?: 'BookingType';
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  flowType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<BookingTypeStatus>;
  dynamicFields?: Maybe<Array<Maybe<BookingTypeDynamicFields>>>;
};

export enum BookingTypeDynamicFieldControl {
  Required = 'REQUIRED',
  Optional = 'OPTIONAL'
}

export type BookingTypeDynamicFields = {
  __typename?: 'BookingTypeDynamicFields';
  key?: Maybe<Scalars['String']>;
  type?: Maybe<BookingDynamicFieldType>;
  query?: Maybe<BookingDynamicFieldQuery>;
  companyTypes?: Maybe<Array<Maybe<CompanyType>>>;
  control?: Maybe<BookingTypeDynamicFieldControl>;
  enumName?: Maybe<Scalars['String']>;
  searchable?: Maybe<Scalars['Boolean']>;
  multiple?: Maybe<Scalars['Boolean']>;
  customValues?: Maybe<Scalars['String']>;
  isMultiline?: Maybe<Scalars['Boolean']>;
};

export type BookingTypeDynamicFieldsInput = {
  key?: Maybe<Scalars['String']>;
  type?: Maybe<BookingDynamicFieldType>;
  query?: Maybe<BookingDynamicFieldQuery>;
  companyTypes?: Maybe<Array<Maybe<CompanyType>>>;
  control?: Maybe<BookingTypeDynamicFieldControl>;
  enumName?: Maybe<Scalars['String']>;
  searchable?: Maybe<Scalars['Boolean']>;
  multiple?: Maybe<Scalars['Boolean']>;
  customValues?: Maybe<Scalars['String']>;
  isMultiline?: Maybe<Scalars['Boolean']>;
};

export type BookingTypes = {
  __typename?: 'BookingTypes';
  rows?: Maybe<Array<Maybe<BookingType>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum BookingTypeStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}

export type ChangeCostItemInput = {
  uuid?: Maybe<Scalars['UUID']>;
  newChargeItemUuid?: Maybe<Scalars['UUID']>;
};

export type Channel = {
  __typename?: 'Channel';
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  sender?: Maybe<Company>;
  receiver?: Maybe<Company>;
};

export type Channels = {
  __typename?: 'Channels';
  rows?: Maybe<Array<Maybe<Channel>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type ChargeCategories = {
  __typename?: 'ChargeCategories';
  rows?: Maybe<Array<Maybe<ChargeCategory>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type ChargeCategory = {
  __typename?: 'ChargeCategory';
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  type?: Maybe<ChargeCategoryType>;
  description?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
};

export enum ChargeCategoryType {
  Department = 'department',
  Job = 'job',
  Location = 'location',
  SstTypeCode = 'sstTypeCode'
}

export type ChargeItem = {
  __typename?: 'ChargeItem';
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  rateType?: Maybe<ChargeRateType>;
  sellTax?: Maybe<Tax>;
  sellRate?: Maybe<Scalars['Float']>;
  sellCurrency?: Maybe<Currency>;
  revenueCode?: Maybe<GlCode>;
  costTax?: Maybe<Tax>;
  costRate?: Maybe<Scalars['Float']>;
  costCurrency?: Maybe<Currency>;
  expenseCode?: Maybe<GlCode>;
  term?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<ChargeItemTagType>>>;
  status?: Maybe<ChargeItemStatus>;
  taxes?: Maybe<Array<Maybe<ChargeItemTax>>>;
  codes?: Maybe<Array<Maybe<ChargeItemCode>>>;
  categories?: Maybe<Array<Maybe<ChargeCategory>>>;
};

export type ChargeItemCode = {
  __typename?: 'ChargeItemCode';
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<ChargeItemCodeType>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  glCode?: Maybe<GlCode>;
};

export enum ChargeItemCodeType {
  ExpenseInternal = 'expenseInternal',
  RevenueInternal = 'revenueInternal',
  ExpenseInternalBranch = 'expenseInternalBranch',
  RevenueInternalBranch = 'revenueInternalBranch',
  ExpenseExp = 'expenseExp',
  RevenueExp = 'revenueExp'
}

export type ChargeItemMigrateType = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
};

export type ChargeItemMisc = {
  __typename?: 'ChargeItemMisc';
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  customer?: Maybe<Company>;
  chargeItem?: Maybe<ChargeItem>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  documentUuid?: Maybe<Scalars['UUID']>;
};

export type ChargeItemMiscs = {
  __typename?: 'ChargeItemMiscs';
  rows?: Maybe<Array<Maybe<ChargeItemMisc>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type ChargeItems = {
  __typename?: 'ChargeItems';
  rows?: Maybe<Array<Maybe<ChargeItem>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum ChargeItemStatus {
  Activated = 'activated',
  Deleted = 'deleted'
}

export enum ChargeItemTagType {
  IsFaf = 'isFaf',
  IsRevenue = 'isRevenue',
  IsTermControl = 'isTermControl',
  IsAutoLoad = 'isAutoLoad',
  IsBillingUnit = 'isBillingUnit',
  IsContainerSize = 'isContainerSize',
  IsOperationCostSheet = 'isOperationCostSheet',
  IsJobClose = 'isJobClose'
}

export type ChargeItemTax = {
  __typename?: 'ChargeItemTax';
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<ChargeItemTaxType>;
  rate?: Maybe<Scalars['Float']>;
  rateType?: Maybe<ChargeRateType>;
  tax?: Maybe<Tax>;
};

export enum ChargeItemTaxType {
  Sell = 'sell',
  Cost = 'cost',
  InputInternal = 'inputInternal',
  InputInternalBranch = 'inputInternalBranch',
  OutputInternal = 'outputInternal',
  OutputInternalBranch = 'outputInternalBranch'
}

export enum ChargeRateRuleType {
  Equal = 'EQUAL',
  NotEqual = 'NOT_EQUAL',
  GreaterThanEqual = 'GREATER_THAN_EQUAL',
  GreaterThan = 'GREATER_THAN',
  LessThan = 'LESS_THAN',
  LessThanEqual = 'LESS_THAN_EQUAL'
}

export enum ChargeRateType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
  Unit = 'UNIT'
}

export type Chronology = {
  __typename?: 'Chronology';
  uuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type ChronologyInput = {
  uuid?: Maybe<Scalars['UUID']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  remarks?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  location?: Maybe<LocationInput>;
};

export type ChronologyNewBookingInput = {
  type: Scalars['String'];
  date: Scalars['DateTime'];
  remarks?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
};

export type ChronologyUpdateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  location?: Maybe<LocationInput>;
  remarks?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
};

export type CloseShiftInput = {
  _id?: Maybe<Scalars['UUID']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  end?: Maybe<Scalars['DateTime']>;
  remarks?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Commodity = {
  __typename?: 'Commodity';
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CommodityInput = {
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CommodityType = {
  __typename?: 'CommodityType';
  uuid?: Maybe<Scalars['UUID']>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CommodityTypes = {
  __typename?: 'CommodityTypes';
  rows?: Maybe<Array<Maybe<CommodityType>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type Companies = {
  __typename?: 'Companies';
  rows?: Maybe<Array<Maybe<Company>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type Company = {
  __typename?: 'Company';
  uuid?: Maybe<Scalars['UUID']>;
  registration?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  accountUuid?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  debtorCode?: Maybe<Scalars['String']>;
  creditorCode?: Maybe<Scalars['String']>;
  debtorTerm?: Maybe<Scalars['Int']>;
  creditorTerm?: Maybe<Scalars['Int']>;
  types?: Maybe<Array<Maybe<CompanyType>>>;
  status?: Maybe<CompanyStatus>;
  countryAlpha3?: Maybe<Scalars['LimitedString']>;
  country?: Maybe<Country>;
  employees?: Maybe<Array<Maybe<User>>>;
  addresses?: Maybe<Array<Maybe<Address>>>;
  contacts?: Maybe<Array<Maybe<Contact>>>;
  billTo?: Maybe<Company>;
  forwarders?: Maybe<Array<Maybe<Company>>>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  currency?: Maybe<Currency>;
  integrationDetail?: Maybe<IntegrationDetail>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedByUuid?: Maybe<Scalars['UUID']>;
  updatedBy?: Maybe<User>;
};

export type CompanyAccess = {
  __typename?: 'CompanyAccess';
  uuid?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  externalBaseCompany?: Maybe<BaseCompany>;
  internalCompany?: Maybe<Company>;
  externalCompany?: Maybe<Company>;
  type?: Maybe<CompanyAccessType>;
  status?: Maybe<CompanyAccessStatus>;
};

export type CompanyAccesses = {
  __typename?: 'CompanyAccesses';
  rows?: Maybe<Array<Maybe<CompanyAccess>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum CompanyAccessStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED'
}

export enum CompanyAccessType {
  Customer = 'CUSTOMER',
  ShipperConsignee = 'SHIPPER_CONSIGNEE'
}

export enum CompanyInviteStatus {
  Invited = 'INVITED',
  Activated = 'ACTIVATED'
}

export type CompanySearch = {
  __typename?: 'CompanySearch';
  hits?: Maybe<Array<Maybe<Company>>>;
  nbHits?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  nbPages?: Maybe<Scalars['Int']>;
  hitsPerPage?: Maybe<Scalars['Int']>;
  processingTimeMS?: Maybe<Scalars['Int']>;
  exhaustiveNbHits?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['String']>;
  params?: Maybe<Scalars['String']>;
};

export enum CompanyStatus {
  Activated = 'activated',
  Deleted = 'deleted'
}

export enum CompanySubscriptionType {
  Premium = 'PREMIUM',
  Standard = 'STANDARD'
}

export enum CompanyType {
  ShipperConsignee = 'shipperConsignee',
  Billing = 'billing',
  Forwarder = 'forwarder',
  FreightForwarder = 'freightForwarder',
  Warehouse = 'warehouse',
  Haulier = 'haulier',
  Transporter = 'transporter',
  Customs = 'customs',
  ShippingAgent = 'shippingAgent',
  Liner = 'liner',
  Port = 'port',
  Depot = 'depot',
  OneTimeVendor = 'oneTimeVendor'
}

export type ComputeReportJobSummaryInput = {
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
};

export enum ComputeSummaryType {
  Job = 'JOB',
  Trip = 'TRIP',
  Leg = 'LEG'
}

export type ConsolVoucher = {
  __typename?: 'ConsolVoucher';
  uuid?: Maybe<Scalars['UUID']>;
  reference?: Maybe<Scalars['String']>;
  type?: Maybe<ConsolVoucherType>;
  owner?: Maybe<BaseCompany>;
  issueDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<ConsolVoucherStatus>;
  vouchers?: Maybe<Array<Maybe<Voucher>>>;
};

export type ConsolVouchers = {
  __typename?: 'ConsolVouchers';
  rows?: Maybe<Array<Maybe<ConsolVoucher>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum ConsolVoucherStatus {
  Cancelled = 'CANCELLED',
  Draft = 'DRAFT',
  Submitted = 'SUBMITTED',
  Approved = 'APPROVED',
  Void = 'VOID'
}

export enum ConsolVoucherType {
  ConsolArInvoice = 'ConsolARInvoice',
  ConsolApInvoice = 'ConsolAPInvoice'
}

export type Contact = {
  __typename?: 'Contact';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
  status?: Maybe<ContactStatus>;
};

export type Contacts = {
  __typename?: 'Contacts';
  rows?: Maybe<Array<Maybe<Contact>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type ContactSimple = {
  __typename?: 'ContactSimple';
  type: ContactSimpleType;
  number: Scalars['String'];
};

export type ContactSimpleInput = {
  type: ContactSimpleType;
  number: Scalars['String'];
};

export enum ContactSimpleType {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY',
  Tertiary = 'TERTIARY',
  Other = 'OTHER'
}

export enum ContactStatus {
  Activated = 'activated',
  Deleted = 'deleted'
}

export type ContainerEvent = {
  __typename?: 'ContainerEvent';
  context?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
};

export type ContainerGrade = {
  __typename?: 'ContainerGrade';
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Int']>;
  baseCompanyUuid?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type ContainerGrades = {
  __typename?: 'ContainerGrades';
  rows?: Maybe<Array<Maybe<ContainerGrade>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum ContainerGradeStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}

export type ContainerType = {
  __typename?: 'ContainerType';
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Int']>;
  baseCompanyUuid?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type ContainerTypes = {
  __typename?: 'ContainerTypes';
  rows?: Maybe<Array<Maybe<ContainerType>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum ContainerTypeStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}

export type CostItem = {
  __typename?: 'CostItem';
  uuid?: Maybe<Scalars['UUID']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  description?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  sellBaseRate?: Maybe<Scalars['Float']>;
  sellRate?: Maybe<Scalars['Float']>;
  sellExchangeRate?: Maybe<Scalars['Float']>;
  sellTotal?: Maybe<Scalars['Float']>;
  sellCurrency?: Maybe<Currency>;
  costBaseRate?: Maybe<Scalars['Float']>;
  costRate?: Maybe<Scalars['Float']>;
  costExchangeRate?: Maybe<Scalars['Float']>;
  costTotal?: Maybe<Scalars['Float']>;
  costCurrency?: Maybe<Currency>;
  accountPayable?: Maybe<Scalars['Float']>;
  accountPayableDraft?: Maybe<Scalars['Float']>;
  accountReceivable?: Maybe<Scalars['Float']>;
  accountReceivableDraft?: Maybe<Scalars['Float']>;
  cashBook?: Maybe<Scalars['Float']>;
  blankCheque?: Maybe<Scalars['Float']>;
  accrual?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  shortBill?: Maybe<Scalars['Float']>;
  estimatedProfit?: Maybe<Scalars['Float']>;
  chargeItem?: Maybe<ChargeItem>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  editBy?: Maybe<User>;
  errors?: Maybe<Array<Maybe<CostItemErrorType>>>;
};

export type CostItemErrorType = {
  __typename?: 'costItemErrorType';
  msg?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  urgency?: Maybe<CostSheetErrorEnum>;
  expectedValue?: Maybe<Scalars['String']>;
  receivedValue?: Maybe<Scalars['String']>;
};

export type CostSheet = {
  __typename?: 'CostSheet';
  estimatedProfit?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  costTotal?: Maybe<Scalars['Float']>;
  sellTotal?: Maybe<Scalars['Float']>;
  accrual?: Maybe<Scalars['Float']>;
  accountPayable?: Maybe<Scalars['Float']>;
  accountReceivable?: Maybe<Scalars['Float']>;
  accountPayableDraft?: Maybe<Scalars['Float']>;
  accountReceivableDraft?: Maybe<Scalars['Float']>;
  shortBill?: Maybe<Scalars['Float']>;
  shortBillPercentage?: Maybe<Scalars['Float']>;
};

export enum CostSheetErrorEnum {
  Error = 'ERROR',
  Warn = 'WARN',
  Info = 'INFO'
}

export type Counter = {
  __typename?: 'Counter';
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
};

export type CounterResults = {
  __typename?: 'CounterResults';
  rows?: Maybe<Array<Maybe<Counter>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum CounterType {
  Incremental = 'incremental',
  Shortid = 'shortid',
  Nanoid = 'nanoid',
  Json = 'json',
  Empty = 'empty'
}

export type Countries = {
  __typename?: 'Countries';
  rows?: Maybe<Array<Maybe<Country>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type Country = {
  __typename?: 'Country';
  name?: Maybe<Scalars['String']>;
  alpha2?: Maybe<Scalars['LimitedString2']>;
  alpha3?: Maybe<Scalars['LimitedString']>;
  ports?: Maybe<Array<Maybe<Port>>>;
};



export type CreateBaseCompanyInput = {
  name: Scalars['String'];
  shortCode?: Maybe<Scalars['String']>;
  types: Array<CompanyType>;
  countryAlpha3: Scalars['LimitedString'];
  cloneSettingsFromBaseCompanyUuid?: Maybe<Scalars['UUID']>;
  registration?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  subscription?: Maybe<CompanySubscriptionType>;
  companyUuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<CompanyStatus>;
  details?: Maybe<BaseCompanyDetailsInput>;
  timezone?: Maybe<Scalars['String']>;
  currencyUuid?: Maybe<Scalars['UUID']>;
};

export type CreateBillingUnitInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<BillingUnitStatus>;
};

export type CreateChannelInput = {
  senderUuid: Scalars['UUID'];
  receiverUuid: Scalars['UUID'];
  type: Scalars['String'];
};

export type CreateChargeItemMiscInput = {
  chargeItemUuid: Scalars['UUID'];
  customerUuid?: Maybe<Scalars['UUID']>;
  type: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  documentUuid?: Maybe<Scalars['UUID']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
};

export type CreateCompanyInput = {
  uuid: Scalars['UUID'];
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  registration?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  status?: Maybe<CompanyStatus>;
  billToUuid?: Maybe<Scalars['UUID']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  types: Array<CompanyType>;
  description?: Maybe<Scalars['String']>;
  countryAlpha3: Scalars['LimitedString'];
  preferredCurrencyUuid?: Maybe<Scalars['UUID']>;
  overrideDuplicateCode?: Maybe<Scalars['Boolean']>;
};

export type CreateConsolVoucherInput = {
  type?: Maybe<Scalars['String']>;
  voucherUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};

export type CreateContainerGradeInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  sorting: Scalars['Int'];
  status?: Maybe<ContainerGradeStatus>;
};

export type CreateContainerTypeInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  sorting: Scalars['Int'];
  status?: Maybe<ContainerTypeStatus>;
};

export type CreateDocumentCreator = {
  bookingUuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<DocumentCreatorType>;
  data?: Maybe<DataDetailsInput>;
};

export type CreateDocumentCreatorTemplate = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  status?: Maybe<DocumentCreatorTemplateStatus>;
  template?: Maybe<Scalars['String']>;
};

export type CreateDriverInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  nickName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  registration?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  status?: Maybe<DriverStatus>;
  ownerType?: Maybe<DriverOwnerType>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  type: DriverType;
  description?: Maybe<Scalars['String']>;
  countryAlpha3?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  governmentId?: Maybe<Scalars['String']>;
  contact?: Maybe<Array<Maybe<ContactSimpleInput>>>;
  address?: Maybe<Array<Maybe<AddEntityAddressInput>>>;
  department?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehiclePreference?: Maybe<Array<Maybe<Scalars['String']>>>;
  healthIssues?: Maybe<Array<Maybe<Scalars['String']>>>;
  healthAllergies?: Maybe<Array<Maybe<Scalars['String']>>>;
  healthBloodtype?: Maybe<Bloodtype>;
  nextOfKinName?: Maybe<Scalars['String']>;
  nextOfKinRelationship?: Maybe<Scalars['String']>;
  nextOfKinContact?: Maybe<Array<Maybe<ContactSimpleInput>>>;
  nextOfKinAddress?: Maybe<Array<Maybe<AddEntityAddressInput>>>;
};

export type CreateExchangeRateInput = {
  fromUuid: Scalars['UUID'];
  toUuid: Scalars['UUID'];
  start: Scalars['String'];
  end: Scalars['String'];
  rate: Scalars['Float'];
};

export type CreateFafInput = {
  uuid: Scalars['UUID'];
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  rate: Scalars['Float'];
  vendorUuid?: Maybe<Scalars['UUID']>;
  customerUuid?: Maybe<Scalars['UUID']>;
};

export type CreateFuelInput = {
  _id: Scalars['UUID'];
  driverUuid?: Maybe<Scalars['UUID']>;
  vehicleUuid: Scalars['UUID'];
  date: Scalars['DateTime'];
  ref?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  odometer: Scalars['Int'];
  amount: Scalars['Float'];
  amountRemaining?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  remarks?: Maybe<Scalars['String']>;
};

export type CreateGateLogInput = {
  _id: Scalars['UUID'];
  type: GateLogType;
  date: Scalars['DateTime'];
  yardUuid: Scalars['UUID'];
  vehicleUuid: Scalars['UUID'];
  driverUuid?: Maybe<Scalars['UUID']>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  odometer?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['String']>;
};

export type CreateGlCodeInput = {
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CreateIncentiveInput = {
  _id?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
  shiftUuid?: Maybe<Scalars['UUID']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  costCode?: Maybe<Scalars['String']>;
  overrideDuplicateLeg?: Maybe<Scalars['Boolean']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['UUID']>;
  remarks?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
};

export type CreateIncentiveRateInput = {
  _id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  transportType?: Maybe<Scalars['String']>;
  uom?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Int']>;
  rates?: Maybe<Array<Maybe<InputIncentiveRateDetails>>>;
};

export type CreateIncentiveTypeInput = {
  _id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  glCodeUuid?: Maybe<Scalars['UUID']>;
  isJobRequired?: Maybe<Scalars['Boolean']>;
  details?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type CreateIncentiveVoucherInput = {
  _id?: Maybe<Scalars['UUID']>;
  incentiveUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  date?: Maybe<Scalars['DateTime']>;
  remarks?: Maybe<Scalars['String']>;
};

export type CreateIntegrationDetailInput = {
  name: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  meta: Scalars['String'];
  integrationUuid: Scalars['UUID'];
  companyUuid?: Maybe<Scalars['UUID']>;
};

export type CreateIntegrationMappingInput = {
  integrationDetailUuid: Scalars['UUID'];
  customerUuid?: Maybe<Scalars['UUID']>;
  type: Scalars['String'];
  externalCode: Scalars['String'];
  internalCode: Scalars['UUID'];
};

export type CreateJobOptionInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<JobOptionStatus>;
};

export type CreatePortalCompanyInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  details?: Maybe<PortalCompanyDetailsInput>;
  viewCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  bookCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  reports?: Maybe<Array<Maybe<PortalCompanyReportConfigInput>>>;
};

export type CreateQuotationInput = {
  term: Scalars['Int'];
  date: Scalars['DateTime'];
  expiry: Scalars['DateTime'];
  status?: Maybe<QuotationStatus>;
  buyerUuid: Scalars['UUID'];
  buyerAddressUuid?: Maybe<Scalars['UUID']>;
  buyerContactUuid?: Maybe<Scalars['UUID']>;
  sellerAddressUuid?: Maybe<Scalars['UUID']>;
  sellerContactUuid?: Maybe<Scalars['UUID']>;
  description?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<QuotationTagTypes>>>;
  quotationItems: Array<Maybe<CreateQuotationItemViaQuotationInput>>;
};

export type CreateQuotationItemInput = {
  quotationUuid: Scalars['UUID'];
  chargeItemUuid: Scalars['UUID'];
  description?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  containerType?: Maybe<Scalars['String']>;
  rateType?: Maybe<ChargeRateType>;
  sellRate?: Maybe<Scalars['Float']>;
  sellCurrencyUuid?: Maybe<Scalars['UUID']>;
  sellTaxUuid?: Maybe<Scalars['UUID']>;
  minChargeAmount?: Maybe<Scalars['Float']>;
  maxChargeAmount?: Maybe<Scalars['Float']>;
  costRate?: Maybe<Scalars['Float']>;
  costCurrencyUuid?: Maybe<Scalars['UUID']>;
  costTaxUuid?: Maybe<Scalars['UUID']>;
  tags?: Maybe<Array<Maybe<QuotationItemTags>>>;
};

export type CreateQuotationItemViaQuotationInput = {
  chargeItemUuid: Scalars['UUID'];
  description?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  containerType?: Maybe<Scalars['String']>;
  rateType?: Maybe<ChargeRateType>;
  sellCurrencyUuid?: Maybe<Scalars['UUID']>;
  sellRate?: Maybe<Scalars['Float']>;
  sellTaxUuid?: Maybe<Scalars['UUID']>;
  minChargeAmount?: Maybe<Scalars['Float']>;
  maxChargeAmount?: Maybe<Scalars['Float']>;
  costCurrencyUuid?: Maybe<Scalars['UUID']>;
  costRate?: Maybe<Scalars['Float']>;
  costTaxUuid?: Maybe<Scalars['UUID']>;
  tags?: Maybe<Array<Maybe<QuotationItemTags>>>;
};

export type CreateReportInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  model?: Maybe<ReportModel>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<ReportCategories>>>;
  sorts?: Maybe<Array<Maybe<Scalars['String']>>>;
  columns?: Maybe<Array<Maybe<ReportColumnInput>>>;
};

export type CreateRoleInput = {
  uuid: Scalars['UUID'];
  name: Scalars['String'];
  code: Scalars['String'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateSettingInput = {
  key?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  setting?: Maybe<Array<Maybe<SettingInput>>>;
};

export type CreateShiftInput = {
  _id?: Maybe<Scalars['UUID']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  breaks?: Maybe<Array<Maybe<ShiftBreakInput>>>;
  remarks?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateTaxInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  percentage: Scalars['Float'];
  exemptionDocumentUuid?: Maybe<Scalars['UUID']>;
};

export type CreateTrailerInput = {
  uuid?: Maybe<Scalars['UUID']>;
  registration?: Maybe<Scalars['String']>;
  ownerType?: Maybe<TrailerOwnerType>;
  make?: Maybe<Scalars['String']>;
  loadCapacity?: Maybe<Scalars['Int']>;
  registrationYear?: Maybe<Scalars['Int']>;
  manufactureYear?: Maybe<Scalars['Int']>;
  trailerType?: Maybe<Scalars['String']>;
  tareWeight?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<TrailerStatus>;
  code?: Maybe<Scalars['String']>;
  department?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateTransportAreaCodeInput = {
  uuid: Scalars['UUID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  zone?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  location?: Maybe<Array<Scalars['Float']>>;
  locationPolygon?: Maybe<Array<Maybe<Array<Scalars['Float']>>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateTransportJobTypeInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<TransportJobTypeStatus>;
};

export type CreateTransportRateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  vendorUuid?: Maybe<Scalars['UUID']>;
  customerUuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Int']>;
  rates?: Maybe<Array<Maybe<InputTransportRateDetails>>>;
};

export type CreateVehicleInput = {
  uuid?: Maybe<Scalars['UUID']>;
  registration?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  department?: Maybe<Array<Maybe<Scalars['String']>>>;
  engineCapacity?: Maybe<Scalars['Int']>;
  registrationYear?: Maybe<Scalars['Int']>;
  manufactureYear?: Maybe<Scalars['Int']>;
  chassisNo?: Maybe<Scalars['String']>;
  engineNo?: Maybe<Scalars['String']>;
  loadCapacity?: Maybe<Scalars['Int']>;
  tareWeight?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  driverPreference?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailerPreference?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<VehicleStatus>;
  ownerType?: Maybe<VehicleOwnerType>;
  antilockBrakes?: Maybe<Scalars['Boolean']>;
  airBags?: Maybe<Scalars['Boolean']>;
  axleWeight?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type CreateVolumeUnitInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<VolumeUnitStatus>;
};

export type CreateVoucherInput = {
  uuid: Scalars['UUID'];
  vendorUuid?: Maybe<Scalars['UUID']>;
  customerUuid?: Maybe<Scalars['UUID']>;
  type: Scalars['String'];
  invoiceNumber?: Maybe<Scalars['String']>;
  issueDate: Scalars['DateTime'];
  accountDate?: Maybe<Scalars['DateTime']>;
  contactPerson?: Maybe<Scalars['String']>;
  addressUuid?: Maybe<Scalars['UUID']>;
  description?: Maybe<Scalars['String']>;
  internalDescription?: Maybe<Scalars['String']>;
  salesPersonUuid?: Maybe<Scalars['UUID']>;
  paymentType: PaymentType;
  isCreditNote: Scalars['Boolean'];
  currencyUuid: Scalars['UUID'];
  term: Scalars['Int'];
  bookingDocumentUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  voucherItems?: Maybe<Array<Maybe<AddVoucherItemViaVoucherInput>>>;
  documentCreatorTemplateUuid?: Maybe<Scalars['UUID']>;
  overrideIncompleteDocs?: Maybe<Scalars['Boolean']>;
  overrideDoubleVoucher?: Maybe<Scalars['Boolean']>;
  overrideDoubleReference?: Maybe<Scalars['Boolean']>;
};

export type CreateWeightUnitInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<WeightUnitStatus>;
};

export type CreateYardInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<YardStatus>;
  remarks?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
};

export type Currencies = {
  __typename?: 'Currencies';
  rows?: Maybe<Array<Maybe<Currency>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type Currency = {
  __typename?: 'Currency';
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DataDetails = {
  __typename?: 'DataDetails';
  submittedDate?: Maybe<Scalars['DateTime']>;
  requiredDate?: Maybe<Scalars['DateTime']>;
  deliveryHour?: Maybe<Scalars['String']>;
  customerRef?: Maybe<Scalars['String']>;
  customerRef2?: Maybe<Scalars['String']>;
  haulier?: Maybe<Company>;
  billToCompany?: Maybe<Company>;
  pickupCompany?: Maybe<Company>;
  pickupAddress?: Maybe<Address>;
  deliveryAddress?: Maybe<Address>;
  dropoffCompany?: Maybe<Company>;
  dropoffAddress?: Maybe<Address>;
  jobs?: Maybe<Array<Maybe<Job>>>;
  documents?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  remarks?: Maybe<Scalars['String']>;
  requestNo?: Maybe<Scalars['String']>;
};

export type DataDetailsInput = {
  haulierUuid: Scalars['UUID'];
  requiredDate: Scalars['DateTime'];
  deliveryHour: Scalars['String'];
  customerRef?: Maybe<Scalars['String']>;
  customerRef2?: Maybe<Scalars['String']>;
  billToUuid: Scalars['UUID'];
  pickupCompanyUuid: Scalars['UUID'];
  pickupAddressUuid?: Maybe<Scalars['UUID']>;
  deliveryAddressUuid: Scalars['UUID'];
  dropoffCompanyUuid: Scalars['UUID'];
  dropoffAddressUuid?: Maybe<Scalars['UUID']>;
  jobs: Array<Scalars['UUID']>;
  documents?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  remarks?: Maybe<Scalars['String']>;
};



export type DeleteIncentiveTypeInput = {
  _id?: Maybe<Scalars['UUID']>;
};

export type DeleteLegInput = {
  _id?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['UUID']>;
};

export type Document = {
  __typename?: 'Document';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
};

export type DocumentCreator = {
  __typename?: 'DocumentCreator';
  uuid?: Maybe<Scalars['UUID']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<DocumentCreatorStatus>;
  type?: Maybe<Scalars['String']>;
  data?: Maybe<DataDetails>;
  dataJSON?: Maybe<Scalars['JSON']>;
  dataJSONObject?: Maybe<Scalars['JSONObject']>;
  template?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentCreatorReference = {
  __typename?: 'DocumentCreatorReference';
  no?: Maybe<Scalars['String']>;
};

export type DocumentCreators = {
  __typename?: 'DocumentCreators';
  rows?: Maybe<Array<Maybe<DocumentCreator>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum DocumentCreatorStatus {
  Cancelled = 'CANCELLED',
  Draft = 'DRAFT',
  Submitted = 'SUBMITTED',
  Approved = 'APPROVED',
  Void = 'VOID'
}

export type DocumentCreatorTemplate = {
  __typename?: 'DocumentCreatorTemplate';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  status?: Maybe<DocumentCreatorTemplateStatus>;
  template?: Maybe<Scalars['String']>;
};

export type DocumentCreatorTemplates = {
  __typename?: 'DocumentCreatorTemplates';
  rows?: Maybe<Array<Maybe<DocumentCreatorTemplate>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum DocumentCreatorTemplateStatus {
  Activated = 'activated',
  Deleted = 'deleted'
}

export enum DocumentCreatorType {
  Rot = 'ROT',
  HouseBl = 'HouseBL',
  HouseNoa = 'HouseNOA'
}

export type DocumentDescription = {
  __typename?: 'DocumentDescription';
  uuid?: Maybe<Scalars['UUID']>;
  entityUuid?: Maybe<Scalars['UUID']>;
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
  entityType?: Maybe<EntityType>;
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<EntityField>>>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  status?: Maybe<DocumentStatus>;
  attachment?: Maybe<Attachment>;
};

export enum DocumentHardCopyStatus {
  Received = 'RECEIVED',
  Submitted = 'SUBMITTED',
  Archived = 'ARCHIVED'
}

export type DocumentInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  size: Scalars['Int'];
  path: Scalars['String'];
};

export enum DocumentStatus {
  Uploaded = 'UPLOADED',
  Requested = 'REQUESTED',
  Verified = 'VERIFIED',
  Deleted = 'DELETED'
}

export type Driver = {
  __typename?: 'Driver';
  uuid?: Maybe<Scalars['UUID']>;
  image?: Maybe<Attachment>;
  documents?: Maybe<Array<Maybe<DocumentDescription>>>;
  name?: Maybe<Scalars['String']>;
  nickName?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  registration?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<DriverType>;
  description?: Maybe<Scalars['String']>;
  countryAlpha3?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  governmentId?: Maybe<Scalars['String']>;
  status?: Maybe<DriverStatus>;
  ownerType?: Maybe<DriverOwnerType>;
  gender?: Maybe<Gender>;
  email?: Maybe<Scalars['String']>;
  contact?: Maybe<Array<Maybe<ContactSimple>>>;
  address?: Maybe<Array<Maybe<EntityAddress>>>;
  department?: Maybe<Array<Maybe<Scalars['String']>>>;
  healthIssues?: Maybe<Array<Maybe<Scalars['String']>>>;
  healthAllergies?: Maybe<Array<Maybe<Scalars['String']>>>;
  healthBloodtype?: Maybe<Bloodtype>;
  nextOfKinName?: Maybe<Scalars['String']>;
  nextOfKinContact?: Maybe<Array<Maybe<ContactSimple>>>;
  nextOfKinRelationship?: Maybe<Scalars['String']>;
  nextOfKinAddress?: Maybe<Array<Maybe<EntityAddress>>>;
  vehiclePreference?: Maybe<Array<Maybe<Scalars['String']>>>;
  editBy?: Maybe<Scalars['String']>;
  editDate?: Maybe<Scalars['String']>;
  companies?: Maybe<Array<Maybe<EntityCompany>>>;
  customers?: Maybe<Array<Maybe<EntityCompany>>>;
  subContractors?: Maybe<Array<Maybe<EntityCompany>>>;
  customerAddress?: Maybe<Array<Maybe<EntityCompanyAddress>>>;
  entityException?: Maybe<EntityExceptionOutcome>;
  employeeUuid?: Maybe<Scalars['UUID']>;
};

export type DriverAppUpdateCount = {
  __typename?: 'DriverAppUpdateCount';
  c?: Maybe<Scalars['Int']>;
  tot?: Maybe<Scalars['Int']>;
};

export type DriverBehaviorAuth = {
  __typename?: 'DriverBehaviorAuth';
  jwt?: Maybe<Scalars['String']>;
};

export enum DriverOwnerType {
  Owned = 'OWNED',
  Intercompany = 'INTERCOMPANY',
  Interbranch = 'INTERBRANCH',
  Outsource = 'OUTSOURCE'
}

export type DriversResults = {
  __typename?: 'DriversResults';
  rows?: Maybe<Array<Maybe<Driver>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum DriverStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Resigned = 'RESIGNED',
  Banned = 'BANNED',
  Deleted = 'DELETED'
}

export enum DriverType {
  Permanent = 'PERMANENT',
  Subcontractor = 'SUBCONTRACTOR',
  Temp = 'TEMP'
}

export type DriverUtilDept = {
  __typename?: 'DriverUtilDept';
  dept?: Maybe<Scalars['String']>;
  c?: Maybe<Scalars['Int']>;
  tot?: Maybe<Scalars['Int']>;
};


export type EmailRequestFields = EmailRequestFieldsNoa | EmailRequestFieldsEdo | EmailRequestFieldsExportDocs | EmailRequestFieldsImportDocs | EmailRequestFieldsHaulageRot | EmailRequestFieldsHaulageRfc | EmailRequestFieldsConsigneeDraftNotification | EmailRequestFieldsLinerBookingConfirmationCustomerRequest | EmailRequestFieldsLinerPendNotifyForeignAgentOfWaybill | EmailRequestFieldsLinerNotifyCustomerComplete | EmailRequestFieldsBookingConfirmationFromLiner | EmailRequestFieldsBookingConfirmationReeferFromLiner | EmailRequestFieldsLinerContainerMovementOrder;

export type EmailRequestFieldsBookingConfirmationFromLiner = {
  __typename?: 'EmailRequestFieldsBookingConfirmationFromLiner';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  shipper?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  commodity?: Maybe<Scalars['String']>;
  vessel?: Maybe<Scalars['String']>;
  etdFrom?: Maybe<Scalars['String']>;
  etaTo?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
};

export type EmailRequestFieldsBookingConfirmationReeferFromLiner = {
  __typename?: 'EmailRequestFieldsBookingConfirmationReeferFromLiner';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  shipper?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  commodity?: Maybe<Scalars['String']>;
  temperatureSummary?: Maybe<Scalars['String']>;
  vessel?: Maybe<Scalars['String']>;
  etdFrom?: Maybe<Scalars['String']>;
  etaTo?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  containerWeights?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type EmailRequestFieldsConsigneeDraftNotification = {
  __typename?: 'EmailRequestFieldsConsigneeDraftNotification';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
};

export type EmailRequestFieldsEdo = {
  __typename?: 'EmailRequestFieldsEdo';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
};

export type EmailRequestFieldsExportDocs = {
  __typename?: 'EmailRequestFieldsExportDocs';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
};

export type EmailRequestFieldsHaulageRfc = {
  __typename?: 'EmailRequestFieldsHaulageRFC';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  bl?: Maybe<Scalars['String']>;
  referenceNo?: Maybe<Scalars['UUID']>;
  requiredDate?: Maybe<Scalars['DateTime']>;
  eta?: Maybe<Scalars['DateTime']>;
  etd?: Maybe<Scalars['DateTime']>;
  lastDay?: Maybe<Scalars['DateTime']>;
  closingDay?: Maybe<Scalars['DateTime']>;
  deliveryHour?: Maybe<Scalars['String']>;
  scn?: Maybe<Scalars['String']>;
  dropOff?: Maybe<Scalars['UUID']>;
  operatorCode?: Maybe<Scalars['UUID']>;
  commodity?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};

export type EmailRequestFieldsHaulageRot = {
  __typename?: 'EmailRequestFieldsHaulageRot';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  referenceNo?: Maybe<Scalars['UUID']>;
  requiredDate?: Maybe<Scalars['DateTime']>;
  eta?: Maybe<Scalars['DateTime']>;
  etd?: Maybe<Scalars['DateTime']>;
  lastDay?: Maybe<Scalars['DateTime']>;
  closingDay?: Maybe<Scalars['DateTime']>;
  deliveryHour?: Maybe<Scalars['String']>;
  scn?: Maybe<Scalars['String']>;
  billingCustomer?: Maybe<Scalars['UUID']>;
  shipperConsignee?: Maybe<Scalars['UUID']>;
  forwardingAgent?: Maybe<Scalars['UUID']>;
  shippingAgent?: Maybe<Scalars['UUID']>;
  pickup?: Maybe<Scalars['UUID']>;
  delivery?: Maybe<Scalars['UUID']>;
  dropOff?: Maybe<Scalars['UUID']>;
  vesselName?: Maybe<Scalars['String']>;
  voyageNo?: Maybe<Scalars['String']>;
  manifestNo?: Maybe<Scalars['String']>;
  dischargePort?: Maybe<Scalars['UUID']>;
  operatorCode?: Maybe<Scalars['UUID']>;
  commodity?: Maybe<Scalars['String']>;
  isDirectLoading?: Maybe<Scalars['Boolean']>;
  isBackToBack?: Maybe<Scalars['Boolean']>;
  isDirectDelivery?: Maybe<Scalars['Boolean']>;
  isCustomsSeal?: Maybe<Scalars['Boolean']>;
  jobs?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};

export type EmailRequestFieldsImportDocs = {
  __typename?: 'EmailRequestFieldsImportDocs';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
};

export type EmailRequestFieldsLinerBookingConfirmationCustomerRequest = {
  __typename?: 'EmailRequestFieldsLinerBookingConfirmationCustomerRequest';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  shipper?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
};

export type EmailRequestFieldsLinerContainerMovementOrder = {
  __typename?: 'EmailRequestFieldsLinerContainerMovementOrder';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  shipper?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
};

export type EmailRequestFieldsLinerNotifyCustomerComplete = {
  __typename?: 'EmailRequestFieldsLinerNotifyCustomerComplete';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  shipper?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
  customerRef?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  commodity?: Maybe<Scalars['String']>;
  vessel?: Maybe<Scalars['String']>;
  etdPkg?: Maybe<Scalars['String']>;
  etaDestination?: Maybe<Scalars['String']>;
  airwayBillNo?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type EmailRequestFieldsLinerPendNotifyForeignAgentOfWaybill = {
  __typename?: 'EmailRequestFieldsLinerPendNotifyForeignAgentOfWaybill';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  shipper?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
  customerRef?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  commodity?: Maybe<Scalars['String']>;
  vessel?: Maybe<Scalars['String']>;
  etdPkg?: Maybe<Scalars['String']>;
  etaDestination?: Maybe<Scalars['String']>;
  airwayBillNo?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type EmailRequestFieldsNoa = {
  __typename?: 'EmailRequestFieldsNoa';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
};

export type EmailRequestFieldsPaymentNotification = {
  __typename?: 'EmailRequestFieldsPaymentNotification';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
};

export type EmailRequestInput = {
  bookingUuid: Scalars['UUID'];
  type: RequestType;
  subject?: Maybe<Scalars['String']>;
  to: Array<Maybe<Scalars['String']>>;
  cc?: Maybe<Array<Maybe<Scalars['String']>>>;
  bcc?: Maybe<Array<Maybe<Scalars['String']>>>;
  remarks?: Maybe<Scalars['String']>;
  override?: Maybe<Scalars['Boolean']>;
  attachments?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobs?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};

export type Employee = {
  __typename?: 'Employee';
  uuid?: Maybe<Scalars['UUID']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  baseCompany?: Maybe<Company>;
  driver?: Maybe<EmployeeDriver>;
};

export type EmployeeDriver = {
  __typename?: 'EmployeeDriver';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  nickName?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  registration?: Maybe<Scalars['String']>;
  employeeUuid?: Maybe<Scalars['UUID']>;
};

export type Employees = {
  __typename?: 'Employees';
  rows?: Maybe<Array<Maybe<Employee>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type EmptyTrip = {
  __typename?: 'EmptyTrip';
  _id?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['String']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  billToCode?: Maybe<Scalars['String']>;
  billToName?: Maybe<Scalars['String']>;
  billToUuid?: Maybe<Scalars['UUID']>;
  shipperCode?: Maybe<Scalars['String']>;
  shipperName?: Maybe<Scalars['String']>;
  shipperUuid?: Maybe<Scalars['UUID']>;
  shipperAddress?: Maybe<Address>;
  consigneeCode?: Maybe<Scalars['String']>;
  consigneeName?: Maybe<Scalars['String']>;
  consigneeUuid?: Maybe<Scalars['UUID']>;
  consigneeAddress?: Maybe<Address>;
  from?: Maybe<Scalars['JSON']>;
  to?: Maybe<Scalars['JSON']>;
  jobNo?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdByUUID?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedByUUID?: Maybe<Scalars['UUID']>;
  status?: Maybe<EmptyTripStatus>;
  proposed?: Maybe<EmptyTripProposed>;
  transportSource?: Maybe<TransportSource>;
  billToSource?: Maybe<TransportSource>;
  cost?: Maybe<Scalars['Float']>;
  reason?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  shipperRequiredDate?: Maybe<Scalars['DateTime']>;
  consigneeRequiredDate?: Maybe<Scalars['DateTime']>;
  shipOutDate?: Maybe<Scalars['DateTime']>;
  planStart?: Maybe<Scalars['DateTime']>;
  start?: Maybe<Scalars['DateTime']>;
  startOut?: Maybe<Scalars['DateTime']>;
  planEnd?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  endOut?: Maybe<Scalars['DateTime']>;
  firstTs?: Maybe<Scalars['DateTime']>;
  lastTs?: Maybe<Scalars['DateTime']>;
  vFirstTs?: Maybe<Scalars['String']>;
  vLastTs?: Maybe<Scalars['String']>;
  dFirstTs?: Maybe<Scalars['String']>;
  dLastTs?: Maybe<Scalars['String']>;
  tLastTs?: Maybe<Scalars['String']>;
  driverCode?: Maybe<Scalars['String']>;
  driverName?: Maybe<Scalars['String']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  driverEntity?: Maybe<Driver>;
  vehicleCode?: Maybe<Scalars['String']>;
  vehicleName?: Maybe<Scalars['String']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  vehicleEntity?: Maybe<Vehicle>;
  vehicleDepartments?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailerCode?: Maybe<Scalars['String']>;
  trailerName?: Maybe<Scalars['String']>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  trailerEntity?: Maybe<Trailer>;
};

export type EmptyTripAddInput = {
  legUuid?: Maybe<Scalars['String']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  shipperCode?: Maybe<Scalars['String']>;
  shipperName?: Maybe<Scalars['String']>;
  shipperUuid?: Maybe<Scalars['UUID']>;
  shipperAddress?: Maybe<Scalars['JSON']>;
  consigneeCode?: Maybe<Scalars['String']>;
  consigneeName?: Maybe<Scalars['String']>;
  consigneeUuid?: Maybe<Scalars['UUID']>;
  consigneeAddress?: Maybe<Scalars['JSON']>;
  from?: Maybe<Scalars['JSON']>;
  to?: Maybe<Scalars['JSON']>;
  jobNo?: Maybe<Scalars['String']>;
  planStart?: Maybe<Scalars['DateTime']>;
  driverCode?: Maybe<Scalars['String']>;
  driverName?: Maybe<Scalars['String']>;
  driverNick?: Maybe<Scalars['String']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  vehicleCode?: Maybe<Scalars['String']>;
  vehicleName?: Maybe<Scalars['String']>;
  vehicleNick?: Maybe<Scalars['String']>;
  vehicleDepartments?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  trailerCode?: Maybe<Scalars['String']>;
  trailerName?: Maybe<Scalars['String']>;
  trailerNick?: Maybe<Scalars['String']>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  remarks?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
};

export type EmptyTripProposed = {
  __typename?: 'EmptyTripProposed';
  status?: Maybe<EmptyTripStatus>;
  to?: Maybe<Scalars['JSON']>;
  from?: Maybe<Scalars['JSON']>;
};

export type EmptyTripQuery = {
  statuses?: Maybe<Array<Maybe<EmptyTripStatus>>>;
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  billToUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  shipperUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  consigneeUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  fromZones?: Maybe<Array<Maybe<Scalars['String']>>>;
  toZones?: Maybe<Array<Maybe<Scalars['String']>>>;
  fromCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  toCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vehicleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  driverCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  tripUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  shipperRequiredDateStart?: Maybe<Scalars['DateTime']>;
  shipperRequiredDateEnd?: Maybe<Scalars['DateTime']>;
  shipOutStartDate?: Maybe<Scalars['DateTime']>;
  shipOutEndDate?: Maybe<Scalars['DateTime']>;
  activityStartDate?: Maybe<Scalars['DateTime']>;
  activityEndDate?: Maybe<Scalars['DateTime']>;
  q?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type EmptyTrips = {
  __typename?: 'EmptyTrips';
  rows?: Maybe<Array<Maybe<EmptyTrip>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum EmptyTripStatus {
  Draft = 'DRAFT',
  Cancelled = 'CANCELLED',
  Validated = 'VALIDATED'
}

export type EmptyTripUpdateInput = {
  legUuid?: Maybe<Scalars['UUID']>;
  remarks?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  from?: Maybe<Scalars['JSON']>;
  to?: Maybe<Scalars['JSON']>;
  planStart?: Maybe<Scalars['DateTime']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  driverNick?: Maybe<Scalars['String']>;
  driverName?: Maybe<Scalars['String']>;
  driverCode?: Maybe<Scalars['String']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  vehicleNick?: Maybe<Scalars['String']>;
  vehicleName?: Maybe<Scalars['String']>;
  vehicleCode?: Maybe<Scalars['String']>;
  vehicleDepartments?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  trailerNick?: Maybe<Scalars['String']>;
  trailerName?: Maybe<Scalars['String']>;
  trailerCode?: Maybe<Scalars['String']>;
};

export type EmptyTripUpdateStatusInput = {
  legUuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<EmptyTripStatus>;
  remarks?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
};

export type EndManifestTripsInput = {
  manifestUuid?: Maybe<Scalars['UUID']>;
  waybillIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['DateTime']>;
  endOut?: Maybe<Scalars['DateTime']>;
  location?: Maybe<ManifestLocationInput>;
};

export type EntityAddress = {
  __typename?: 'EntityAddress';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<AddressStatus>;
  type?: Maybe<Array<Maybe<AddressType>>>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  areaCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AddressTags>>>;
  location?: Maybe<Geometry>;
  countryAlpha3?: Maybe<Scalars['LimitedString']>;
};

export type EntityCategoryRequirement = {
  __typename?: 'EntityCategoryRequirement';
  allowedCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  documentRequirements?: Maybe<Array<Maybe<EntityDocumentRequirement>>>;
};

export type EntityCompany = {
  __typename?: 'EntityCompany';
  companyType?: Maybe<EntityCompanyType>;
  companyUuid?: Maybe<Scalars['UUID']>;
  companyReference?: Maybe<Scalars['String']>;
};

export type EntityCompanyAddress = {
  __typename?: 'EntityCompanyAddress';
  addressUuid?: Maybe<Scalars['UUID']>;
  companyReference?: Maybe<Scalars['String']>;
};

export enum EntityCompanyType {
  Company = 'COMPANY',
  Customer = 'CUSTOMER',
  Subcon = 'SUBCON'
}

export enum EntityCompanyUpdateType {
  Customer = 'CUSTOMER',
  Subcon = 'SUBCON'
}

export type EntityDetails = {
  __typename?: 'EntityDetails';
  entityUuid?: Maybe<Scalars['UUID']>;
  driver?: Maybe<Driver>;
  vehicle?: Maybe<Vehicle>;
  trailer?: Maybe<Trailer>;
  remarks?: Maybe<Scalars['String']>;
  editByUuid?: Maybe<Scalars['UUID']>;
  editBy?: Maybe<User>;
  editByDate?: Maybe<Scalars['DateTime']>;
};

export type EntityDocumentRequirement = {
  __typename?: 'EntityDocumentRequirement';
  category?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<EntityFieldReq>>>;
  isRequired?: Maybe<Scalars['Boolean']>;
};

export type EntityDocumentRequirementInput = {
  category?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<EntityFieldReqInput>>>;
  isRequired?: Maybe<Scalars['Boolean']>;
};

export type EntityEvent = {
  __typename?: 'EntityEvent';
  userUuid?: Maybe<Scalars['UUID']>;
  userEmail?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EntityExceptionOutcome = {
  __typename?: 'EntityExceptionOutcome';
  entityUuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<EntityExceptionOutcomeStatus>;
  remark?: Maybe<Scalars['String']>;
  exceptions?: Maybe<Array<Maybe<EntityExceptionsItem>>>;
};

export enum EntityExceptionOutcomeStatus {
  Pass = 'PASS',
  Fail = 'FAIL',
  Warn = 'WARN'
}

export type EntityExceptions = {
  __typename?: 'EntityExceptions';
  DRIVER?: Maybe<Array<Maybe<EntityExceptionOutcome>>>;
  VEHICLE?: Maybe<Array<Maybe<EntityExceptionOutcome>>>;
  TRAILER?: Maybe<Array<Maybe<EntityExceptionOutcome>>>;
};

export type EntityExceptionsItem = {
  __typename?: 'EntityExceptionsItem';
  companyUuid?: Maybe<Scalars['UUID']>;
  entityUuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<EntityExceptionOutcomeStatus>;
  entityType?: Maybe<EntityType>;
  category?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};

export type EntityField = {
  __typename?: 'EntityField';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<EntityFieldType>;
  value?: Maybe<Scalars['String']>;
};

export type EntityFieldInput = {
  name: Scalars['String'];
  type: EntityFieldType;
  value: Scalars['String'];
};

export type EntityFieldReq = {
  __typename?: 'EntityFieldReq';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<EntityFieldType>;
  selectOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  validOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EntityFieldReqInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<EntityFieldType>;
  selectOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  validOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum EntityFieldType {
  String = 'STRING',
  Date = 'DATE',
  Boolean = 'BOOLEAN'
}

export type EntityRequirements = {
  __typename?: 'EntityRequirements';
  DRIVER?: Maybe<EntityCategoryRequirement>;
  VEHICLE?: Maybe<EntityCategoryRequirement>;
  TRAILER?: Maybe<EntityCategoryRequirement>;
};

export enum EntityType {
  Driver = 'DRIVER',
  Vehicle = 'VEHICLE',
  Trailer = 'TRAILER'
}

export type EntityTypeUnion = Driver | Vehicle | Trailer;

export type Event = BookingEvent | ContainerEvent | MessageEvent;

export type EventCreator = {
  __typename?: 'EventCreator';
  uuid?: Maybe<Scalars['UUID']>;
  nickname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Email']>;
  picture?: Maybe<Scalars['String']>;
};

export type EventEtc = {
  __typename?: 'EventEtc';
  action?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  payload?: Maybe<Scalars['JSON']>;
  user?: Maybe<User>;
};

export type EventsEtc = {
  __typename?: 'EventsEtc';
  rows?: Maybe<Array<Maybe<EventEtc>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type EventVoucher = {
  __typename?: 'EventVoucher';
  context?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  payload?: Maybe<Scalars['JSON']>;
  user?: Maybe<User>;
};

export type EventVouchers = {
  __typename?: 'EventVouchers';
  rows?: Maybe<Array<Maybe<EventVoucher>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  uuid?: Maybe<Scalars['UUID']>;
  from?: Maybe<Currency>;
  to?: Maybe<Currency>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  rate?: Maybe<Scalars['Float']>;
  company?: Maybe<Company>;
};

export type ExchangeRates = {
  __typename?: 'ExchangeRates';
  rows?: Maybe<Array<Maybe<ExchangeRate>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type Faf = {
  __typename?: 'Faf';
  uuid?: Maybe<Scalars['UUID']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  rate?: Maybe<Scalars['Float']>;
  vendorUuid?: Maybe<Scalars['UUID']>;
  customerUuid?: Maybe<Scalars['UUID']>;
  customer?: Maybe<Company>;
  vendor?: Maybe<Company>;
};

export type Fafs = {
  __typename?: 'Fafs';
  rows?: Maybe<Array<Maybe<Faf>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type FmsCompany = {
  __typename?: 'FmsCompany';
  CompanyCode?: Maybe<Scalars['String']>;
  BranchCode?: Maybe<Scalars['String']>;
  CustomerCode?: Maybe<Scalars['String']>;
  CustomerType?: Maybe<Scalars['String']>;
  CustomerDebtorCode?: Maybe<Scalars['String']>;
  CustomerAccountCode?: Maybe<Scalars['String']>;
  CustomerName?: Maybe<Scalars['String']>;
  IsSuspend?: Maybe<Scalars['Boolean']>;
  Remarks?: Maybe<Scalars['String']>;
};

export type ForwarderBookingDetails = {
  __typename?: 'ForwarderBookingDetails';
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  incoTerm?: Maybe<IncoTerm>;
  transportDocumentType?: Maybe<TransportDocumentType>;
  internalReference?: Maybe<Scalars['String']>;
  saBookingNo?: Maybe<Scalars['String']>;
  shipCallSign?: Maybe<Scalars['String']>;
  voyageNo?: Maybe<Scalars['String']>;
  vesselId?: Maybe<Scalars['String']>;
  vesselName?: Maybe<Scalars['String']>;
  motherVesselName?: Maybe<Scalars['String']>;
  motherVesselVoyageNo?: Maybe<Scalars['String']>;
  transshipmentPort?: Maybe<Scalars['String']>;
  manifestNo?: Maybe<Scalars['String']>;
  scn?: Maybe<Scalars['String']>;
  bl?: Maybe<Scalars['String']>;
  houseBl?: Maybe<Scalars['String']>;
  customsDocNo?: Maybe<Array<Maybe<Scalars['String']>>>;
  shippingRef?: Maybe<Scalars['String']>;
  shipmentType?: Maybe<ShipmentTypeInput>;
  shipperRef?: Maybe<Scalars['String']>;
  consigneeRef?: Maybe<Scalars['String']>;
  haulierOriRef?: Maybe<Scalars['String']>;
  haulierDestRef?: Maybe<Scalars['String']>;
  forwarderOriRef?: Maybe<Scalars['String']>;
  forwarderDestRef?: Maybe<Scalars['String']>;
  linerOriRef?: Maybe<Scalars['String']>;
  linerDestRef?: Maybe<Scalars['String']>;
  operatorOri?: Maybe<Scalars['String']>;
  operatorDest?: Maybe<Scalars['String']>;
  terminalOri?: Maybe<Scalars['String']>;
  terminalDest?: Maybe<Scalars['String']>;
  departments?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Fuel = {
  __typename?: 'Fuel';
  _id?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  status: FuelStatus;
  driverUuid: Scalars['UUID'];
  driver?: Maybe<Driver>;
  vehicleUuid: Scalars['UUID'];
  vehicle?: Maybe<Vehicle>;
  date?: Maybe<Scalars['DateTime']>;
  ref?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  odometer?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  remarks?: Maybe<Scalars['String']>;
  approvedBy?: Maybe<User>;
  approvedUuid?: Maybe<Scalars['UUID']>;
  approvedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<User>;
  updatedUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  createdUuid?: Maybe<Scalars['UUID']>;
};

export type FuelQueryInput = {
  start?: Maybe<Scalars['DateTime']>;
  end: Scalars['DateTime'];
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  statuses?: Maybe<Array<Maybe<FuelStatus>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Fuels = {
  __typename?: 'Fuels';
  rows?: Maybe<Array<Maybe<Fuel>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum FuelStatus {
  Created = 'CREATED',
  Cancelled = 'CANCELLED',
  Approved = 'APPROVED'
}

export type GateLog = {
  __typename?: 'GateLog';
  _id?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<GateLogStatus>;
  type?: Maybe<GateLogType>;
  date?: Maybe<Scalars['DateTime']>;
  yardUuid?: Maybe<Scalars['UUID']>;
  yard?: Maybe<Yard>;
  driverUuid?: Maybe<Scalars['UUID']>;
  driver?: Maybe<Driver>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  vehicle?: Maybe<Vehicle>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  trailer?: Maybe<Trailer>;
  odometer?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<User>;
  updatedUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  createdUuid?: Maybe<Scalars['UUID']>;
};

export type GateLogQueryInput = {
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  yardUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  trailerUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  statuses?: Maybe<Array<Maybe<GateLogStatus>>>;
  types?: Maybe<Array<Maybe<GateLogType>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type GateLogs = {
  __typename?: 'GateLogs';
  rows?: Maybe<Array<Maybe<GateLog>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum GateLogStatus {
  Created = 'CREATED',
  Cancelled = 'CANCELLED'
}

export enum GateLogType {
  In = 'IN',
  Out = 'OUT'
}

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER'
}

export type GenerateReportInput = {
  reportUuid?: Maybe<Scalars['UUID']>;
  match?: Maybe<Scalars['JSON']>;
};

export type Geocode = {
  __typename?: 'Geocode';
  title?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  resultType?: Maybe<Scalars['String']>;
  address?: Maybe<ReverseGeoAddress>;
};

export type Geocodes = {
  __typename?: 'Geocodes';
  items?: Maybe<Array<Maybe<Geocode>>>;
};

export type Geometry = {
  __typename?: 'Geometry';
  type?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GeometryPoint = {
  __typename?: 'GeometryPoint';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type GeometryPolygon = {
  __typename?: 'GeometryPolygon';
  type?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
};

export type GlCode = {
  __typename?: 'GlCode';
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<GlCodeStatus>;
};

export type GlCodes = {
  __typename?: 'GlCodes';
  rows?: Maybe<Array<Maybe<GlCode>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum GlCodeStatus {
  Activated = 'activated',
  Deleted = 'deleted'
}

export type GoogleGeometry = {
  __typename?: 'GoogleGeometry';
  location?: Maybe<GeometryPoint>;
};

export type Group = {
  __typename?: 'Group';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  ruleCondition?: Maybe<RuleCondition>;
  rules?: Maybe<Array<Maybe<GroupRule>>>;
};

export type GroupRule = {
  __typename?: 'GroupRule';
  type?: Maybe<GroupRuleType>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type GroupRuleInput = {
  type: GroupRuleType;
  id: Scalars['String'];
};

export enum GroupRuleType {
  ImportOrExport = 'importOrExport',
  Company = 'company',
  Port = 'port',
  ShipmentType = 'shipmentType',
  JobCategory = 'jobCategory'
}

export type Groups = {
  __typename?: 'Groups';
  rows?: Maybe<Array<Maybe<Group>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type ImpCustConsigneeDraftNotification = {
  __typename?: 'ImpCustConsigneeDraftNotification';
  subject?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  receiverGreeting?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<BookingDocument>>>;
  bl?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
};

export type Incentive = {
  __typename?: 'Incentive';
  _id?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  driverCode?: Maybe<Scalars['String']>;
  driverName?: Maybe<Scalars['String']>;
  driver?: Maybe<Driver>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  vehicleCode?: Maybe<Scalars['String']>;
  vehicleName?: Maybe<Scalars['String']>;
  vehicle?: Maybe<Vehicle>;
  date?: Maybe<Scalars['DateTime']>;
  status?: Maybe<IncentiveStatus>;
  typeUuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<IncentiveType>;
  costCode?: Maybe<Scalars['String']>;
  transportJob?: Maybe<TransportJob>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['UUID']>;
  shift?: Maybe<Shift>;
  shiftUuid?: Maybe<Scalars['UUID']>;
  incentiveVoucher?: Maybe<IncentiveVoucher>;
  incentiveVoucherUuid?: Maybe<Scalars['UUID']>;
  amount?: Maybe<Scalars['Float']>;
  remarks?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  createdUuid?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<User>;
  updatedUuid?: Maybe<Scalars['UUID']>;
  voucher?: Maybe<Voucher>;
  voucherUuid?: Maybe<Scalars['UUID']>;
};

export type IncentiveCategorySum = {
  __typename?: 'IncentiveCategorySum';
  category?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
};

export type IncentiveQueryInput = {
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  shiftUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  tripUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  statuses?: Maybe<Array<Maybe<IncentiveStatus>>>;
  approved?: Maybe<Scalars['Boolean']>;
  approvedFinance?: Maybe<Scalars['Boolean']>;
  hasVoucher?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type IncentiveRate = {
  __typename?: 'IncentiveRate';
  _id?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  transportType?: Maybe<Scalars['String']>;
  uom?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Int']>;
  rates?: Maybe<Array<Maybe<IncentiveRateDetails>>>;
  updatedBy?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUuid?: Maybe<Scalars['UUID']>;
  createdBy?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUuid?: Maybe<Scalars['UUID']>;
};

export type IncentiveRateDetails = {
  __typename?: 'IncentiveRateDetails';
  transactionType?: Maybe<TransportRateTransactionType>;
  customer?: Maybe<Company>;
  customerUuid?: Maybe<Scalars['UUID']>;
  cargoType?: Maybe<TransportRateCargoTypes>;
  transportType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  rateType?: Maybe<ChargeRateType>;
};

export type IncentiveRateQueryInput = {
  to?: Maybe<Array<Maybe<Scalars['String']>>>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type IncentiveRates = {
  __typename?: 'IncentiveRates';
  rows?: Maybe<Array<Maybe<IncentiveRate>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type Incentives = {
  __typename?: 'Incentives';
  rows?: Maybe<Array<Maybe<Incentive>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum IncentiveStatus {
  Generated = 'GENERATED',
  Approved = 'APPROVED',
  Approvedfinance = 'APPROVEDFINANCE',
  Cancelled = 'CANCELLED',
  Deleted = 'DELETED'
}

export type IncentiveType = {
  __typename?: 'IncentiveType';
  _id?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  glCodeUuid?: Maybe<Scalars['UUID']>;
  glCode?: Maybe<GlCode>;
  isJobRequired?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedUuid?: Maybe<Scalars['UUID']>;
  createdBy?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdUuid?: Maybe<Scalars['UUID']>;
};

export type IncentiveTypeQueryInput = {
  name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  shiftUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  status?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type IncentiveTypes = {
  __typename?: 'IncentiveTypes';
  rows?: Maybe<Array<Maybe<IncentiveType>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type IncentiveTypeSum = {
  __typename?: 'IncentiveTypeSum';
  typeUuid?: Maybe<Scalars['UUID']>;
  amount?: Maybe<Scalars['Float']>;
};

export type IncentiveVoucher = {
  __typename?: 'IncentiveVoucher';
  _id?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  voucherNo?: Maybe<Scalars['String']>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  drivers?: Maybe<Array<Maybe<Driver>>>;
  incentiveUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  incentives?: Maybe<Array<Maybe<Incentive>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  tripUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
  date?: Maybe<Scalars['DateTime']>;
  status?: Maybe<IncentiveVoucherStatus>;
  approvedBy?: Maybe<User>;
  approvedUuid?: Maybe<Scalars['UUID']>;
  approvedAt?: Maybe<Scalars['DateTime']>;
  approvedFinanceBy?: Maybe<User>;
  approvedFinanceUuid?: Maybe<Scalars['UUID']>;
  approvedFinanceAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<User>;
  updatedUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  createdUuid?: Maybe<Scalars['UUID']>;
  remarks?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  incentiveTypeUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  incentiveTypeSum?: Maybe<Array<Maybe<IncentiveTypeSum>>>;
  incentiveCategorySum?: Maybe<Array<Maybe<IncentiveCategorySum>>>;
};

export type IncentiveVoucherQueryInput = {
  q?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  statuses?: Maybe<Array<Maybe<IncentiveVoucherStatus>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  tripUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  incentiveTypeUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jsonQueryOptions?: Maybe<Array<Maybe<IncentiveVoucherQueryOptions>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum IncentiveVoucherQueryOptions {
  TransportJobs = 'transportJobs',
  Drivers = 'drivers',
  Vehicles = 'vehicles',
  Users = 'users',
  IncentiveTypes = 'incentiveTypes',
  Incentives = 'incentives'
}

export type IncentiveVouchers = {
  __typename?: 'IncentiveVouchers';
  rows?: Maybe<Array<Maybe<IncentiveVoucher>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum IncentiveVoucherStatus {
  Draft = 'DRAFT',
  Approved = 'APPROVED',
  Approvedfinance = 'APPROVEDFINANCE',
  Cancelled = 'CANCELLED'
}

export enum IncoTerm {
  Exw = 'EXW',
  Fca = 'FCA',
  Cpt = 'CPT',
  Cip = 'CIP',
  Dat = 'DAT',
  Dap = 'DAP',
  Ddp = 'DDP',
  Fas = 'FAS',
  Fob = 'FOB',
  Cfr = 'CFR',
  Cif = 'CIF'
}

export type InputIncentiveRateDetails = {
  transactionType?: Maybe<TransportRateTransactionType>;
  customerUuid?: Maybe<Scalars['UUID']>;
  cargoType?: Maybe<TransportRateCargoTypes>;
  transportType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  rateType?: Maybe<ChargeRateType>;
};

export type InputTransportRateDetails = {
  transactionType?: Maybe<TransportRateTransactionType>;
  cargoType?: Maybe<TransportRateCargoTypes>;
  transportType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  rateType?: Maybe<ChargeRateType>;
  rateUom?: Maybe<Scalars['String']>;
  rateRule?: Maybe<ChargeRateRuleType>;
  rateValue?: Maybe<Scalars['Float']>;
};

export type Integration = {
  __typename?: 'Integration';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type IntegrationDetail = {
  __typename?: 'IntegrationDetail';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  integration?: Maybe<Integration>;
};

export type IntegrationDetails = {
  __typename?: 'IntegrationDetails';
  rows?: Maybe<Array<Maybe<IntegrationDetail>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type IntegrationLog = {
  __typename?: 'IntegrationLog';
  uuid?: Maybe<Scalars['UUID']>;
  baseCompany?: Maybe<BaseCompany>;
  integrationDetail?: Maybe<IntegrationDetail>;
  type?: Maybe<Scalars['String']>;
  voucherUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  costItemUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  sendDetails?: Maybe<Scalars['String']>;
  sendType?: Maybe<IntegrationLogDetailsType>;
  receiveDetails?: Maybe<Scalars['String']>;
  receiveType?: Maybe<IntegrationLogDetailsType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export enum IntegrationLogDetailsType {
  Json = 'JSON',
  String = 'STRING',
  Xml = 'XML'
}

export type IntegrationLogs = {
  __typename?: 'IntegrationLogs';
  rows?: Maybe<Array<Maybe<IntegrationLog>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type IntegrationLogsQuery = {
  __typename?: 'IntegrationLogsQuery';
  voucherUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  costItemUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type IntegrationMapping = {
  __typename?: 'IntegrationMapping';
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  externalCode?: Maybe<Scalars['String']>;
  internalCode?: Maybe<Scalars['UUID']>;
  integrationDetailUuid?: Maybe<Scalars['UUID']>;
  customer?: Maybe<Company>;
};

export type IntegrationMappings = {
  __typename?: 'IntegrationMappings';
  rows?: Maybe<Array<Maybe<IntegrationMapping>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type Integrations = {
  __typename?: 'Integrations';
  rows?: Maybe<Array<Maybe<Integration>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type InviteCompanyAccess = {
  __typename?: 'InviteCompanyAccess';
  uuid?: Maybe<Scalars['UUID']>;
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  companyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  status?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  acceptedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  acceptedBy?: Maybe<User>;
};

export type InviteCompanyAccesses = {
  __typename?: 'InviteCompanyAccesses';
  rows?: Maybe<Array<Maybe<InviteCompanyAccess>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type InviteCompanyAccessInput = {
  uuid: Scalars['UUID'];
  emails: Array<Maybe<Scalars['String']>>;
  companyUuids: Array<Maybe<Scalars['UUID']>>;
};

export type InvitedBaseCompany = {
  __typename?: 'InvitedBaseCompany';
  inviteUuid?: Maybe<Scalars['UUID']>;
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
};

export type InvitePortalCompanyInput = {
  portalCompanyUuid?: Maybe<Scalars['UUID']>;
  users?: Maybe<Array<Maybe<InviteUser>>>;
};

export type InviteUser = {
  email: Scalars['Email'];
  name: Scalars['String'];
  roles: Array<Maybe<Scalars['String']>>;
};

export type InviteUserResponse = {
  __typename?: 'InviteUserResponse';
  email?: Maybe<Scalars['Email']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<User>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type Job = {
  __typename?: 'Job';
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<JobStatus>;
  state?: Maybe<JobState>;
  type?: Maybe<Scalars['String']>;
  no?: Maybe<Scalars['String']>;
  jobNo?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['JSON']>;
  reference?: Maybe<JobReferences>;
  remarks?: Maybe<Scalars['String']>;
  impRequestOfTransportDate?: Maybe<Scalars['DateTime']>;
  impReadyForCollectionDate?: Maybe<Scalars['DateTime']>;
  expRequestOfTransportDate?: Maybe<Scalars['DateTime']>;
  expReadyForCollectionDate?: Maybe<Scalars['DateTime']>;
  trips?: Maybe<Array<Maybe<Trip>>>;
  bookingUuid?: Maybe<Scalars['UUID']>;
};

export type JobInput = {
  uuid: Scalars['UUID'];
  status: JobStatus;
  no?: Maybe<Scalars['String']>;
  jobNo?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['JSON']>;
  reference?: Maybe<JobReferencesInput>;
  remarks?: Maybe<Scalars['String']>;
  trips?: Maybe<Array<Maybe<TripInput>>>;
  type?: Maybe<Scalars['String']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
};

export type JobOption = {
  __typename?: 'JobOption';
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  baseCompanyUuid?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type JobOptions = {
  __typename?: 'JobOptions';
  rows?: Maybe<Array<Maybe<JobOption>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum JobOptionStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}

export type JobReferences = {
  __typename?: 'JobReferences';
  haulage?: Maybe<Scalars['String']>;
  transport?: Maybe<Scalars['String']>;
  shipper?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  forwardingDest?: Maybe<Scalars['String']>;
  forwardingOri?: Maybe<Scalars['String']>;
};

export type JobReferencesInput = {
  haulage?: Maybe<Scalars['String']>;
  transport?: Maybe<Scalars['String']>;
  shipper?: Maybe<Scalars['String']>;
  consignee?: Maybe<Scalars['String']>;
  forwardingDest?: Maybe<Scalars['String']>;
  forwardingOri?: Maybe<Scalars['String']>;
};

export type Jobs = {
  __typename?: 'Jobs';
  rows?: Maybe<Array<Maybe<Job>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type JobsJson = {
  __typename?: 'JobsJson';
  rows?: Maybe<Scalars['JSON']>;
  pageInfo?: Maybe<NumberPagination>;
};

export type JobsSearchFilter = {
  companyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipConCode?: Maybe<Scalars['String']>;
  bookingUuid?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};

export type JobsSearchInput = {
  q?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<JobsSearchFilter>;
};

export enum JobState {
  Pending = 'PENDING',
  Enroute = 'ENROUTE',
  Complete = 'COMPLETE'
}

export enum JobStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED'
}

export type JobSummaries = {
  __typename?: 'JobSummaries';
  rows?: Maybe<Array<Maybe<JobSummary>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type JobSummariesQueryInput = {
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  transportSources?: Maybe<Array<Maybe<TransportSource>>>;
  billToSources?: Maybe<Array<Maybe<TransportSource>>>;
  limit?: Maybe<Scalars['Int']>;
};

export type JobSummary = {
  __typename?: 'JobSummary';
  uuid?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  ladenCount?: Maybe<Scalars['Int']>;
  ladenUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  emptyCount?: Maybe<Scalars['Int']>;
  emptyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  emptyCost?: Maybe<Scalars['Float']>;
  transportSource?: Maybe<TransportSource>;
  billToSource?: Maybe<TransportSource>;
  dept?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobTripUpdateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  waybillId?: Maybe<Scalars['String']>;
  fromCompanyUuid?: Maybe<Scalars['UUID']>;
  toCompanyUuid?: Maybe<Scalars['UUID']>;
  fromUuid?: Maybe<Scalars['UUID']>;
  toUuid?: Maybe<Scalars['UUID']>;
  remarks?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<TripStatus>;
  seal?: Maybe<Scalars['String']>;
};

export type JobType = {
  __typename?: 'JobType';
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<JobTypeStatus>;
  tripDetails?: Maybe<Array<Maybe<JobTypeDetails>>>;
  requiredFields?: Maybe<Array<Maybe<JobTypeRequiredFields>>>;
  dynamicFields?: Maybe<Array<Maybe<JobTypeDynamicFields>>>;
  unitOptions?: Maybe<Array<Maybe<JobTypeUnitOptions>>>;
  computeType?: Maybe<JobTypeComputeType>;
};

export enum JobTypeComputeType {
  FirstTrip = 'FIRST_TRIP',
  LastTrip = 'LAST_TRIP',
  AllTrips = 'ALL_TRIPS'
}

export type JobTypeDetails = {
  __typename?: 'JobTypeDetails';
  type?: Maybe<Scalars['String']>;
  fromCompanyTypes?: Maybe<Array<Maybe<CompanyType>>>;
  toCompanyTypes?: Maybe<Array<Maybe<CompanyType>>>;
};

export type JobTypeDetailsInput = {
  type?: Maybe<Scalars['String']>;
  fromCompanyTypes?: Maybe<Array<Maybe<CompanyType>>>;
  toCompanyTypes?: Maybe<Array<Maybe<CompanyType>>>;
};

export enum JobTypeDynamicFieldControl {
  Required = 'REQUIRED',
  Optional = 'OPTIONAL'
}

export type JobTypeDynamicFields = {
  __typename?: 'JobTypeDynamicFields';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  control?: Maybe<JobTypeDynamicFieldControl>;
};

export type JobTypeDynamicInput = {
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  control?: Maybe<JobTypeRequiredFieldControl>;
};

export enum JobTypeRequiredFieldControl {
  Required = 'REQUIRED',
  Optional = 'OPTIONAL'
}

export type JobTypeRequiredFields = {
  __typename?: 'JobTypeRequiredFields';
  name?: Maybe<JobTypeRequiredFieldTypes>;
  control?: Maybe<JobTypeRequiredFieldControl>;
};

export enum JobTypeRequiredFieldTypes {
  Type = 'type',
  TransportType = 'transportType',
  ContainerType = 'containerType',
  No = 'no',
  Options = 'options',
  RefUnitAmount = 'refUnitAmount',
  RefUnit = 'refUnit',
  Size = 'size',
  Weight = 'weight',
  Volume = 'volume',
  Seal = 'seal',
  ContainerGrade = 'containerGrade',
  TripSeal = 'tripSeal',
  TripReferences = 'tripReferences'
}

export type JobTypeRequiredInput = {
  name?: Maybe<JobTypeRequiredFieldTypes>;
  control?: Maybe<JobTypeRequiredFieldControl>;
};

export type JobTypes = {
  __typename?: 'JobTypes';
  rows?: Maybe<Array<Maybe<JobType>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum JobTypeStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}

export type JobTypeUnitOptions = {
  __typename?: 'JobTypeUnitOptions';
  units?: Maybe<Array<Maybe<Scalars['String']>>>;
  values?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type JobTypeUnitOptionsInput = {
  units?: Maybe<Array<Maybe<Scalars['String']>>>;
  values?: Maybe<Array<Maybe<Scalars['Float']>>>;
};




export type Leg = {
  __typename?: 'Leg';
  bookingUuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['UUID']>;
  legStatus?: Maybe<LegStatus>;
  sequenceTotal?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['UUID']>;
  planStart?: Maybe<Scalars['DateTime']>;
  start?: Maybe<Scalars['DateTime']>;
  startOut?: Maybe<Scalars['DateTime']>;
  planEnd?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  endOut?: Maybe<Scalars['DateTime']>;
  firstTs?: Maybe<Scalars['DateTime']>;
  lastTs?: Maybe<Scalars['DateTime']>;
  vFirstTs?: Maybe<Scalars['String']>;
  vLastTs?: Maybe<Scalars['String']>;
  dFirstTs?: Maybe<Scalars['String']>;
  dLastTs?: Maybe<Scalars['String']>;
  tLastTs?: Maybe<Scalars['String']>;
  driverCode?: Maybe<Scalars['String']>;
  driverName?: Maybe<Scalars['String']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  driverEntity?: Maybe<Driver>;
  vehicleCode?: Maybe<Scalars['String']>;
  vehicleName?: Maybe<Scalars['String']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  vehicleDepartments?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleEntity?: Maybe<Vehicle>;
  trailerCode?: Maybe<Scalars['String']>;
  trailerName?: Maybe<Scalars['String']>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  trailerEntity?: Maybe<Trailer>;
  type?: Maybe<LegType>;
  activityType?: Maybe<LegTimeType>;
  yardUuid?: Maybe<Scalars['UUID']>;
  yard?: Maybe<Yard>;
  transportUuid?: Maybe<Scalars['UUID']>;
  transportName?: Maybe<Scalars['String']>;
  transportSource?: Maybe<TransportSource>;
  remarks?: Maybe<Scalars['String']>;
};

export type LegActivities = {
  __typename?: 'LegActivities';
  rows?: Maybe<Array<Maybe<LegActivity>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type LegActivitiesQuery = {
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type LegActivity = {
  __typename?: 'LegActivity';
  _id?: Maybe<Scalars['UUID']>;
  uuid?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<LegType>;
  triggerApi?: Maybe<Scalars['Int']>;
  yardUuid?: Maybe<Scalars['UUID']>;
  yard?: Maybe<Yard>;
  address?: Maybe<Scalars['JSON']>;
  addAfterSequence?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
  sequenceTotal?: Maybe<Scalars['Int']>;
  legStatus?: Maybe<LegStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  userUuid?: Maybe<Scalars['UUID']>;
  createdBy?: Maybe<User>;
  planStart?: Maybe<Scalars['DateTime']>;
  start?: Maybe<Scalars['DateTime']>;
  startOut?: Maybe<Scalars['DateTime']>;
  planEnd?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  endOut?: Maybe<Scalars['DateTime']>;
  firstTs?: Maybe<Scalars['DateTime']>;
  lastTs?: Maybe<Scalars['DateTime']>;
  vFirstTs?: Maybe<Scalars['String']>;
  vLastTs?: Maybe<Scalars['String']>;
  dFirstTs?: Maybe<Scalars['String']>;
  dLastTs?: Maybe<Scalars['String']>;
  tLastTs?: Maybe<Scalars['String']>;
  driverCode?: Maybe<Scalars['String']>;
  driverName?: Maybe<Scalars['String']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  driverEntity?: Maybe<Driver>;
  vehicleCode?: Maybe<Scalars['String']>;
  vehicleName?: Maybe<Scalars['String']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  vehicleEntity?: Maybe<Vehicle>;
  trailerCode?: Maybe<Scalars['String']>;
  trailerName?: Maybe<Scalars['String']>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  trailerEntity?: Maybe<Trailer>;
  transportUuid?: Maybe<Scalars['UUID']>;
  transportName?: Maybe<Scalars['String']>;
  transportSource?: Maybe<TransportSource>;
  remarks?: Maybe<Scalars['String']>;
};

export type LegInput = {
  uuid?: Maybe<Scalars['UUID']>;
  planStart?: Maybe<Scalars['DateTime']>;
  start?: Maybe<Scalars['DateTime']>;
  startOut?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  endOut?: Maybe<Scalars['DateTime']>;
  driverId?: Maybe<Scalars['String']>;
  driverName?: Maybe<Scalars['String']>;
  pmId?: Maybe<Scalars['String']>;
  pmName?: Maybe<Scalars['String']>;
  trailerId?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  from?: Maybe<AddressInput>;
  to?: Maybe<AddressInput>;
  sequence?: Maybe<Scalars['Float']>;
  tripRemarks?: Maybe<Scalars['String']>;
  tripReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum LegStatus {
  Pending = 'PENDING',
  Planned = 'PLANNED',
  Enroute = 'ENROUTE',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
  Deleted = 'DELETED'
}

export type LegSummaries = {
  __typename?: 'LegSummaries';
  rows?: Maybe<Array<Maybe<LegSummary>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type LegSummariesQueryInput = {
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  transportSources?: Maybe<Array<Maybe<TransportSource>>>;
  billToSources?: Maybe<Array<Maybe<TransportSource>>>;
  limit?: Maybe<Scalars['Int']>;
};

export type LegSummary = {
  __typename?: 'LegSummary';
  uuid?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  ladenCount?: Maybe<Scalars['Int']>;
  ladenUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  ladenLegs?: Maybe<Array<Maybe<TransportJob>>>;
  emptyCount?: Maybe<Scalars['Int']>;
  emptyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  emptyLegs?: Maybe<EmptyTrips>;
  emptyCost?: Maybe<Scalars['Float']>;
  transportSource?: Maybe<TransportSource>;
  billToSource?: Maybe<TransportSource>;
  dept?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum LegTimeType {
  PlanStart = 'planStart',
  Start = 'start',
  StartOut = 'startOut',
  PlanEnd = 'planEnd',
  End = 'end',
  EndOut = 'endOut'
}

export enum LegType {
  Delivery = 'DELIVERY',
  Stage = 'STAGE',
  Break = 'BREAK'
}




export type Location = {
  __typename?: 'Location';
  type?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type LocationInput = {
  type?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type MakeBookingCommentInput = {
  uuid: Scalars['UUID'];
  message: Scalars['String'];
};

export type MakeBookingInput = {
  uuid: Scalars['UUID'];
  type: Scalars['String'];
  override?: Maybe<Scalars['Boolean']>;
  quotationUuid?: Maybe<Scalars['String']>;
  companyUuid?: Maybe<Scalars['UUID']>;
  remarks?: Maybe<Scalars['String']>;
  containerType?: Maybe<Scalars['String']>;
  twentyFootContainer?: Maybe<Scalars['Int']>;
  fourtyFootContainer?: Maybe<Scalars['Int']>;
  serviceTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<BookingTagType>>>;
  placeOri?: Maybe<Scalars['String']>;
  placeDest?: Maybe<Scalars['String']>;
  shipperUuid?: Maybe<Scalars['UUID']>;
  shipperAddressUuid?: Maybe<Scalars['UUID']>;
  consigneeUuid?: Maybe<Scalars['UUID']>;
  consigneeAddressUuid?: Maybe<Scalars['UUID']>;
  portOriUuid?: Maybe<Scalars['UUID']>;
  portDestUuid?: Maybe<Scalars['UUID']>;
  depotOriUuid?: Maybe<Scalars['UUID']>;
  depotDestUuid?: Maybe<Scalars['UUID']>;
  billToUuid?: Maybe<Scalars['UUID']>;
  haulierOriUuid?: Maybe<Scalars['UUID']>;
  haulierDestUuid?: Maybe<Scalars['UUID']>;
  forwarderOriUuid?: Maybe<Scalars['UUID']>;
  forwarderDestUuid?: Maybe<Scalars['UUID']>;
  linerOriUuid?: Maybe<Scalars['UUID']>;
  linerDestUuid?: Maybe<Scalars['UUID']>;
  warehouseUuid?: Maybe<Scalars['UUID']>;
  warehouseAddressUuid?: Maybe<Scalars['UUID']>;
  commodities?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobs?: Maybe<Array<Maybe<AddJobInput>>>;
  chronologies?: Maybe<Array<Maybe<ChronologyNewBookingInput>>>;
  details?: Maybe<Scalars['JSON']>;
};

export type MakeRequestInput = {
  bookingUuid: Scalars['UUID'];
  type: Scalars['String'];
  invoiceNumber?: Maybe<Scalars['String']>;
  invoiceAmount?: Maybe<Scalars['Int']>;
};

export type Manifest = {
  __typename?: 'Manifest';
  ownerUuid?: Maybe<Scalars['UUID']>;
  uuid?: Maybe<Scalars['UUID']>;
  no?: Maybe<Scalars['String']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  driver?: Maybe<Driver>;
  vehicle?: Maybe<Vehicle>;
  legs?: Maybe<Array<Maybe<TransportJob>>>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  startLocation?: Maybe<ManifestLocation>;
  endLocation?: Maybe<ManifestLocation>;
  status?: Maybe<ManifestStatus>;
};

export enum ManifestLegAction {
  StartIn = 'startIn',
  StartOut = 'startOut',
  EndIn = 'endIn',
  EndOut = 'endOut'
}

export type ManifestLocation = {
  __typename?: 'ManifestLocation';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
};

export type ManifestLocationInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
};

export type Manifests = {
  __typename?: 'Manifests';
  rows?: Maybe<Array<Maybe<Manifest>>>;
  count?: Maybe<Scalars['Int']>;
};

export enum ManifestStatus {
  Empty = 'EMPTY',
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Closed = 'CLOSED',
  Cancelled = 'CANCELLED'
}

export type MessageEvent = {
  __typename?: 'MessageEvent';
  context?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  payload?: Maybe<Scalars['String']>;
  user?: Maybe<EventCreator>;
};

export type MessageEventPayload = {
  __typename?: 'MessageEventPayload';
  message?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum MultiPointFormat {
  Linear = 'linear',
  SameStart = 'sameStart',
  SameEnd = 'sameEnd'
}

export type Mutation = {
  __typename?: 'Mutation';
  addAddress?: Maybe<Address>;
  updateAddress?: Maybe<Address>;
  updateAddressLocation?: Maybe<Address>;
  deleteAddress?: Maybe<Response>;
  approve?: Maybe<Approval>;
  acceptInvitation?: Maybe<Response>;
  createBaseCompany?: Maybe<BaseCompany>;
  updateBaseCompany?: Maybe<BaseCompany>;
  deleteBaseCompany?: Maybe<Response>;
  createSetting?: Maybe<BaseCompanySetting>;
  updateSetting?: Maybe<BaseCompanySetting>;
  deleteSetting?: Maybe<Response>;
  deleteCounter?: Maybe<Response>;
  createBillingUnit?: Maybe<BillingUnit>;
  updateBillingUnit?: Maybe<BillingUnit>;
  deleteBillingUnit?: Maybe<Response>;
  undeleteBillingUnit?: Maybe<Response>;
  makeBooking?: Maybe<Booking>;
  updateBooking?: Maybe<Booking>;
  setBookingAssignee?: Maybe<Response>;
  unsetBookingAssignee?: Maybe<Response>;
  makeBookingComment?: Maybe<MessageEvent>;
  updateBookingActivities?: Maybe<Booking>;
  changeBookingStatus?: Maybe<Booking>;
  computeCost?: Maybe<Array<Maybe<CostItem>>>;
  recomputeCost?: Maybe<Response>;
  triggerBookingEvent?: Maybe<Response>;
  createBookingType?: Maybe<BookingType>;
  updateBookingType?: Maybe<BookingType>;
  deleteBookingType?: Maybe<Response>;
  undeleteBookingType?: Maybe<Response>;
  createChannel?: Maybe<Channel>;
  updateChannel?: Maybe<Channel>;
  deleteChannel?: Maybe<Response>;
  addChargeCategory?: Maybe<ChargeCategory>;
  updateChargeCategory?: Maybe<ChargeCategory>;
  deleteChargeCategory?: Maybe<Response>;
  addChargeItem?: Maybe<ChargeItem>;
  updateChargeItem?: Maybe<ChargeItem>;
  deleteChargeItem?: Maybe<Response>;
  addChargeItemTax?: Maybe<ChargeItem>;
  updateChargeItemTax?: Maybe<ChargeItem>;
  deleteChargeItemTax?: Maybe<Response>;
  addChargeItemCode?: Maybe<ChargeItem>;
  updateChargeItemCode?: Maybe<ChargeItem>;
  deleteChargeItemCode?: Maybe<Response>;
  addChargeItemCategory?: Maybe<ChargeItem>;
  deleteChargeItemCategory?: Maybe<ChargeItem>;
  createChargeItemMisc?: Maybe<ChargeItemMisc>;
  updateChargeItemMisc?: Maybe<ChargeItemMisc>;
  deleteChargeItemMisc?: Maybe<Response>;
  insertChronology?: Maybe<Chronology>;
  updateChronology?: Maybe<Chronology>;
  removeChronology?: Maybe<Response>;
  createCompany?: Maybe<Company>;
  updateCompany?: Maybe<Company>;
  updateCompanyCode?: Maybe<Company>;
  deleteCompany?: Maybe<Response>;
  linkCompany?: Maybe<Company>;
  unlinkCompany?: Maybe<Company>;
  createInviteCompanyAccess?: Maybe<InviteCompanyAccess>;
  resendInviteCompanyAccess?: Maybe<Response>;
  rejectInviteCompanyAccess?: Maybe<Response>;
  deleteCompanyAccess?: Maybe<Response>;
  linkInviteCompanyAccess?: Maybe<Response>;
  createBaseCompanyInviteCompanyAccess?: Maybe<InvitedBaseCompany>;
  createConsolVoucher?: Maybe<ConsolVoucher>;
  changeConsolVoucherStatus?: Maybe<ConsolVoucher>;
  addContact?: Maybe<Contact>;
  updateContact?: Maybe<Contact>;
  deleteContact?: Maybe<Response>;
  createContainerGrade?: Maybe<ContainerGrade>;
  updateContainerGrade?: Maybe<ContainerGrade>;
  deleteContainerGrade?: Maybe<Response>;
  undeleteContainerGrade?: Maybe<Response>;
  createContainerType?: Maybe<ContainerType>;
  updateContainerType?: Maybe<ContainerType>;
  deleteContainerType?: Maybe<Response>;
  undeleteContainerType?: Maybe<Response>;
  addBookingCostItem?: Maybe<CostItem>;
  deleteBookingCostItem?: Maybe<Response>;
  updateBookingCostItem?: Maybe<CostItem>;
  changeBookingCostItemChargeCode?: Maybe<CostItem>;
  enableCountry?: Maybe<Country>;
  createCurrency?: Maybe<Currency>;
  updateCurrency?: Maybe<Currency>;
  addCurrency?: Maybe<Currency>;
  removeCurrency?: Maybe<Response>;
  uploadBookingDocument?: Maybe<BookingDocument>;
  updateBookingDocument?: Maybe<BookingDocument>;
  verifyBookingDocument?: Maybe<BookingDocument>;
  approveBookingDocument?: Maybe<BookingDocument>;
  deleteBookingDocument?: Maybe<BookingDocument>;
  createDocumentCreator?: Maybe<DocumentCreator>;
  createDocumentCreatorFromTemplate?: Maybe<DocumentCreator>;
  updateDocumentCreator?: Maybe<DocumentCreator>;
  changeDocumentCreatorStatus?: Maybe<DocumentCreator>;
  changeDocumentCreatorStatusAdvanced?: Maybe<DocumentCreator>;
  generateDocumentCreatorNumber?: Maybe<DocumentCreatorReference>;
  createDocumentCreatorTemplate?: Maybe<DocumentCreatorTemplate>;
  updateDocumentCreatorTemplate?: Maybe<DocumentCreatorTemplate>;
  deleteDocumentCreatorTemplate?: Maybe<Response>;
  undeleteDocumentCreatorTemplate?: Maybe<Response>;
  inviteToCompany?: Maybe<Array<Maybe<InviteUserResponse>>>;
  resendInvite?: Maybe<Response>;
  changeEmployeeRole?: Maybe<User>;
  addEmployeeToDriver?: Maybe<Response>;
  removeEmployee?: Maybe<Response>;
  createExchangeRate?: Maybe<ExchangeRate>;
  updateExchangeRate?: Maybe<ExchangeRate>;
  deleteExchangeRate?: Maybe<Response>;
  createFaf?: Maybe<Faf>;
  updateFaf?: Maybe<Faf>;
  deleteFaf?: Maybe<Response>;
  migrateFmsCompany?: Maybe<Company>;
  migrateFmsCharges?: Maybe<Array<Maybe<ChargeItem>>>;
  createGlCode?: Maybe<GlCode>;
  updateGlCode?: Maybe<GlCode>;
  deleteGlCode?: Maybe<Response>;
  undeleteGlCode?: Maybe<Response>;
  createGroup?: Maybe<Group>;
  updateGroup?: Maybe<Group>;
  removeGroup?: Maybe<Response>;
  addMember?: Maybe<Group>;
  removeMember?: Maybe<Group>;
  createIntegrationDetail?: Maybe<IntegrationDetail>;
  updateIntegrationDetail?: Maybe<IntegrationDetail>;
  deleteIntegrationDetail?: Maybe<Response>;
  createIntegrationMapping?: Maybe<IntegrationMapping>;
  updateIntegrationMapping?: Maybe<IntegrationMapping>;
  deleteIntegrationMapping?: Maybe<Response>;
  addJob?: Maybe<Job>;
  rolloverJob?: Maybe<Job>;
  updateJob?: Maybe<Job>;
  updateJobTrips?: Maybe<Response>;
  deleteJob?: Maybe<Response>;
  undeleteJob?: Maybe<Response>;
  reindexJob?: Maybe<Response>;
  createJobOption?: Maybe<JobOption>;
  updateJobOption?: Maybe<JobOption>;
  deleteJobOption?: Maybe<Response>;
  undeleteJobOption?: Maybe<Response>;
  createJobType?: Maybe<JobType>;
  updateJobType?: Maybe<JobType>;
  deleteJobType?: Maybe<Response>;
  undeleteJobType?: Maybe<Response>;
  addMonitoringCompany?: Maybe<Company>;
  removeMonitoringCompany?: Maybe<Response>;
  addPayment?: Maybe<Payment>;
  updatePayment?: Maybe<Payment>;
  deletePayment?: Maybe<Payment>;
  createPermission?: Maybe<Array<Maybe<Permission>>>;
  deletePermission?: Maybe<Array<Maybe<Permission>>>;
  createPortalCompany?: Maybe<PortalCompany>;
  updatePortalCompany?: Maybe<PortalCompany>;
  invitePortalCompany?: Maybe<Response>;
  unInvitePortalCompany?: Maybe<Response>;
  deletePortalCompany?: Maybe<Response>;
  undeletePortalCompany?: Maybe<Response>;
  expireQuotation?: Maybe<Quotation>;
  createQuotation?: Maybe<Quotation>;
  updateQuotation?: Maybe<Quotation>;
  createQuotationItem?: Maybe<QuotationItem>;
  updateQuotationItem?: Maybe<QuotationItem>;
  deleteQuotationItem?: Maybe<Response>;
  submitRequest?: Maybe<Request>;
  submitROT?: Maybe<Request>;
  requestApprove?: Maybe<Request>;
  createRole?: Maybe<Role>;
  updateRole?: Maybe<Role>;
  addSuperAdmin?: Maybe<Employee>;
  removeSuperAdmin?: Maybe<Response>;
  createTax?: Maybe<Tax>;
  updateTax?: Maybe<Tax>;
  deleteTax?: Maybe<Response>;
  undeleteTax?: Maybe<Response>;
  createTransportAreaCode?: Maybe<TransportAreaCode>;
  updateTransportAreaCode?: Maybe<TransportAreaCode>;
  deleteTransportAreaCode?: Maybe<Response>;
  createTransportJobType?: Maybe<TransportJobType>;
  updateTransportJobType?: Maybe<TransportJobType>;
  deleteTransportJobType?: Maybe<Response>;
  undeleteTransportJobType?: Maybe<Response>;
  createTransportRate?: Maybe<TransportRate>;
  updateTransportRate?: Maybe<TransportRate>;
  deleteTransportRate?: Maybe<Response>;
  createTransportRateFromBooking?: Maybe<Response>;
  updateTrip?: Maybe<Response>;
  updateUser?: Maybe<User>;
  updateUserPreference?: Maybe<UserPreference>;
  deleteUserPreference?: Maybe<Response>;
  createVolumeUnit?: Maybe<VolumeUnit>;
  updateVolumeUnit?: Maybe<VolumeUnit>;
  deleteVolumeUnit?: Maybe<Response>;
  undeleteVolumeUnit?: Maybe<Response>;
  createVoucher?: Maybe<Voucher>;
  updateVoucher?: Maybe<Voucher>;
  changeVoucherStatus?: Maybe<Voucher>;
  changeVoucherType?: Maybe<Voucher>;
  rolloverVoucher?: Maybe<Voucher>;
  createVoucherRevision?: Maybe<Voucher>;
  linkDocumentToVoucher?: Maybe<Voucher>;
  unlinkDocumentFromVoucher?: Maybe<Voucher>;
  addVoucherItem?: Maybe<VoucherItem>;
  updateVoucherItem?: Maybe<VoucherItem>;
  deleteVoucherItem?: Maybe<Response>;
  triggerVoucherEvent?: Maybe<Response>;
  createWeightUnit?: Maybe<WeightUnit>;
  updateWeightUnit?: Maybe<WeightUnit>;
  deleteWeightUnit?: Maybe<Response>;
  undeleteWeightUnit?: Maybe<Response>;
  updateAvailability?: Maybe<Response>;
  populateAvailability?: Maybe<Response>;
  updateEntityRequirements?: Maybe<Response>;
  updateEntityRequirementsCategory?: Maybe<Response>;
  addEntityDocument?: Maybe<DocumentDescription>;
  updateEntityDocument?: Maybe<DocumentDescription>;
  updateEntityDocumentStatus?: Maybe<DocumentDescription>;
  createDriver?: Maybe<Driver>;
  updateDriver?: Maybe<Driver>;
  updateDriverStatus?: Maybe<Driver>;
  updateDriverImage?: Maybe<Driver>;
  updateDriverCompany?: Maybe<Driver>;
  updateDriverEmployee?: Maybe<Driver>;
  removeDriverCompany?: Maybe<Driver>;
  createVehicle?: Maybe<Vehicle>;
  updateVehicle?: Maybe<Vehicle>;
  updateVehicleStatus?: Maybe<Vehicle>;
  updateVehicleImage?: Maybe<Vehicle>;
  updateVehicleCompany?: Maybe<Vehicle>;
  removeVehicleCompany?: Maybe<Vehicle>;
  createTrailer?: Maybe<Trailer>;
  updateTrailer?: Maybe<Trailer>;
  updateTrailerStatus?: Maybe<Trailer>;
  updateTrailerImage?: Maybe<Trailer>;
  updateTrailerCompany?: Maybe<Trailer>;
  removeTrailerCompany?: Maybe<Trailer>;
  _jobsConvertEmptyTrips?: Maybe<Response>;
  _emptyTripsDataPatch?: Maybe<Response>;
  addEmptyTrip?: Maybe<Response>;
  updateEmptyTrip?: Maybe<Response>;
  updateEmptyTripStatus?: Maybe<Response>;
  _computeReportJobSummary?: Maybe<Response>;
  _plannerQueueRunner?: Maybe<Response>;
  _triggerComputeTripSummary?: Maybe<Response>;
  computeTripSummary?: Maybe<Response>;
  processVehiclePlan?: Maybe<Response>;
  createReport?: Maybe<Response>;
  updateReport?: Maybe<Response>;
  deleteReport?: Maybe<Response>;
  assignPortalCompanyReport?: Maybe<Response>;
  unassignPortalCompanyReport?: Maybe<Response>;
  generateReport?: Maybe<Response>;
  processReportPortalCompany?: Maybe<Response>;
  syncEmployees?: Maybe<Response>;
  purgeQueue?: Maybe<Response>;
  approveFuel?: Maybe<Response>;
  cancelFuel?: Maybe<Response>;
  unapproveFuel?: Maybe<Response>;
  uncancelFuel?: Maybe<Response>;
  createFuel?: Maybe<Fuel>;
  updateFuel?: Maybe<Fuel>;
  createGateLog?: Maybe<GateLog>;
  updateGateLog?: Maybe<GateLog>;
  cancelGateLog?: Maybe<Response>;
  uncancelGateLog?: Maybe<Response>;
  createIncentive?: Maybe<Incentive>;
  updateIncentive?: Maybe<Incentive>;
  deleteIncentive?: Maybe<Response>;
  undeleteIncentive?: Maybe<Response>;
  createIncentiveRate?: Maybe<IncentiveRate>;
  updateIncentiveRate?: Maybe<IncentiveRate>;
  deleteIncentiveRate?: Maybe<Response>;
  createIncentiveType?: Maybe<IncentiveType>;
  updateIncentiveType?: Maybe<IncentiveType>;
  deleteIncentiveType?: Maybe<IncentiveType>;
  undeleteIncentiveType?: Maybe<IncentiveType>;
  createIncentiveVoucher?: Maybe<IncentiveVoucher>;
  updateIncentiveVoucher?: Maybe<IncentiveVoucher>;
  approveIncentiveVoucher?: Maybe<Response>;
  unapproveIncentiveVoucher?: Maybe<Response>;
  approveIncentiveVoucherFinance?: Maybe<Response>;
  unapproveIncentiveVoucherFinance?: Maybe<Response>;
  cancelIncentiveVoucher?: Maybe<Response>;
  uncancelIncentiveVoucher?: Maybe<Response>;
  _transportQueueRunner?: Maybe<Response>;
  _jobsConvertLegs?: Maybe<Response>;
  _triggerJobReports?: Maybe<Response>;
  _jobsDataPatch?: Maybe<Response>;
  processTransportBooking?: Maybe<Array<Maybe<TransportJob>>>;
  updateTransportJobAddress?: Maybe<Response>;
  generateJobsDev?: Maybe<Response>;
  processAllJobs?: Maybe<Response>;
  processJob?: Maybe<Response>;
  addLeg?: Maybe<Response>;
  updateLeg?: Maybe<Response>;
  updateLegTiming?: Maybe<Response>;
  deleteLeg?: Maybe<Response>;
  undeleteLeg?: Maybe<Response>;
  recomputeLegActivities?: Maybe<Response>;
  addManifest?: Maybe<Manifest>;
  deleteManifests?: Maybe<Response>;
  closeManifests?: Maybe<Response>;
  addLegsToManifest?: Maybe<Response>;
  addTripsToManifest?: Maybe<Response>;
  endTripsInManifest?: Maybe<Response>;
  removeLegsFromManifest?: Maybe<Response>;
  openShift?: Maybe<Shift>;
  closeShift?: Maybe<Shift>;
  updateShift?: Maybe<Shift>;
  approveShift?: Maybe<Response>;
  unapproveShift?: Maybe<Response>;
  approveShiftFinance?: Maybe<Response>;
  unapproveShiftFinance?: Maybe<Response>;
  cancelShift?: Maybe<Response>;
  uncancelShift?: Maybe<Response>;
  createYard?: Maybe<Yard>;
  updateYard?: Maybe<Yard>;
  deleteYard?: Maybe<Response>;
  undeleteYard?: Maybe<Response>;
};


export type MutationAddAddressArgs = {
  input: AddAddressInput;
};


export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationUpdateAddressLocationArgs = {
  input: UpdateAddressLocationInput;
};


export type MutationDeleteAddressArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationApproveArgs = {
  input: ApprovalInput;
};


export type MutationAcceptInvitationArgs = {
  userToken?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['Password']>;
};


export type MutationCreateBaseCompanyArgs = {
  input: CreateBaseCompanyInput;
};


export type MutationUpdateBaseCompanyArgs = {
  input: UpdateBaseCompanyInput;
};


export type MutationDeleteBaseCompanyArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCreateSettingArgs = {
  input: CreateSettingInput;
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
};


export type MutationDeleteSettingArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationDeleteCounterArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCreateBillingUnitArgs = {
  input?: Maybe<CreateBillingUnitInput>;
};


export type MutationUpdateBillingUnitArgs = {
  input?: Maybe<UpdateBillingUnitInput>;
};


export type MutationDeleteBillingUnitArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeleteBillingUnitArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationMakeBookingArgs = {
  input: MakeBookingInput;
};


export type MutationUpdateBookingArgs = {
  input: UpdateBookingInput;
};


export type MutationSetBookingAssigneeArgs = {
  input: BookingAssigneeInput;
};


export type MutationUnsetBookingAssigneeArgs = {
  uuid: Scalars['UUID'];
};


export type MutationMakeBookingCommentArgs = {
  uuid: Scalars['UUID'];
  message: Scalars['String'];
};


export type MutationUpdateBookingActivitiesArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationChangeBookingStatusArgs = {
  uuid: Scalars['UUID'];
  status: Scalars['String'];
  remarks?: Maybe<Scalars['String']>;
};


export type MutationComputeCostArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationRecomputeCostArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationTriggerBookingEventArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateBookingTypeArgs = {
  input?: Maybe<UpdateBookingTypeInput>;
};


export type MutationUpdateBookingTypeArgs = {
  input?: Maybe<UpdateBookingTypeInput>;
};


export type MutationDeleteBookingTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeleteBookingTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};


export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};


export type MutationDeleteChannelArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationAddChargeCategoryArgs = {
  type: ChargeCategoryType;
  code: Scalars['String'];
  description: Scalars['String'];
  sequence?: Maybe<Scalars['String']>;
};


export type MutationUpdateChargeCategoryArgs = {
  input: UpdateChargeCategoryInput;
};


export type MutationDeleteChargeCategoryArgs = {
  uuid: Scalars['UUID'];
};


export type MutationAddChargeItemArgs = {
  input: AddChargeItemInput;
};


export type MutationUpdateChargeItemArgs = {
  input: UpdateChargeItemInput;
};


export type MutationDeleteChargeItemArgs = {
  uuid: Scalars['UUID'];
};


export type MutationAddChargeItemTaxArgs = {
  input: AddChargeItemTaxInput;
};


export type MutationUpdateChargeItemTaxArgs = {
  input: UpdateChargeItemTaxInput;
};


export type MutationDeleteChargeItemTaxArgs = {
  uuid: Scalars['UUID'];
};


export type MutationAddChargeItemCodeArgs = {
  input: AddChargeItemCodeInput;
};


export type MutationUpdateChargeItemCodeArgs = {
  input: UpdateChargeItemCodeInput;
};


export type MutationDeleteChargeItemCodeArgs = {
  uuid: Scalars['UUID'];
};


export type MutationAddChargeItemCategoryArgs = {
  chargeItemUuid: Scalars['UUID'];
  chargeCategoryUuid: Scalars['UUID'];
};


export type MutationDeleteChargeItemCategoryArgs = {
  chargeItemUuid: Scalars['UUID'];
  chargeCategoryUuid: Scalars['UUID'];
};


export type MutationCreateChargeItemMiscArgs = {
  input: CreateChargeItemMiscInput;
};


export type MutationUpdateChargeItemMiscArgs = {
  input: UpdateChargeItemMiscInput;
};


export type MutationDeleteChargeItemMiscArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationInsertChronologyArgs = {
  input: ChronologyInput;
};


export type MutationUpdateChronologyArgs = {
  input: ChronologyUpdateInput;
};


export type MutationRemoveChronologyArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


export type MutationUpdateCompanyCodeArgs = {
  input: UpdateCompanyCodeInput;
};


export type MutationDeleteCompanyArgs = {
  uuid: Scalars['UUID'];
};


export type MutationLinkCompanyArgs = {
  baseCompanyUuid: Scalars['UUID'];
  companyUuid: Scalars['UUID'];
};


export type MutationUnlinkCompanyArgs = {
  companyUuid: Scalars['UUID'];
};


export type MutationCreateInviteCompanyAccessArgs = {
  input: InviteCompanyAccessInput;
};


export type MutationResendInviteCompanyAccessArgs = {
  uuid: Scalars['UUID'];
};


export type MutationRejectInviteCompanyAccessArgs = {
  uuid: Scalars['UUID'];
};


export type MutationDeleteCompanyAccessArgs = {
  uuid: Scalars['UUID'];
};


export type MutationLinkInviteCompanyAccessArgs = {
  uuid: Scalars['UUID'];
  externalCompanyUuids: Array<Maybe<Scalars['UUID']>>;
};


export type MutationCreateBaseCompanyInviteCompanyAccessArgs = {
  inviteUuid: Scalars['UUID'];
  name: Scalars['String'];
};


export type MutationCreateConsolVoucherArgs = {
  input: CreateConsolVoucherInput;
};


export type MutationChangeConsolVoucherStatusArgs = {
  uuid: Scalars['UUID'];
  status: ConsolVoucherStatus;
};


export type MutationAddContactArgs = {
  input: AddContactInput;
};


export type MutationUpdateContactArgs = {
  input: UpdateContactInput;
};


export type MutationDeleteContactArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateContainerGradeArgs = {
  input: CreateContainerGradeInput;
};


export type MutationUpdateContainerGradeArgs = {
  input: UpdateContainerGradeInput;
};


export type MutationDeleteContainerGradeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeleteContainerGradeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateContainerTypeArgs = {
  input: CreateContainerTypeInput;
};


export type MutationUpdateContainerTypeArgs = {
  input: UpdateContainerTypeInput;
};


export type MutationDeleteContainerTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeleteContainerTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationAddBookingCostItemArgs = {
  input: AddCostItemInput;
};


export type MutationDeleteBookingCostItemArgs = {
  uuid: Scalars['UUID'];
};


export type MutationUpdateBookingCostItemArgs = {
  input: UpdateCostItemInput;
};


export type MutationChangeBookingCostItemChargeCodeArgs = {
  input?: Maybe<ChangeCostItemInput>;
};


export type MutationEnableCountryArgs = {
  alpha3?: Maybe<Scalars['LimitedString']>;
};


export type MutationCreateCurrencyArgs = {
  code: Scalars['String'];
  name: Scalars['String'];
};


export type MutationUpdateCurrencyArgs = {
  uuid: Scalars['UUID'];
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationAddCurrencyArgs = {
  currencyUuid: Scalars['UUID'];
  baseCompanyUuid: Scalars['UUID'];
};


export type MutationRemoveCurrencyArgs = {
  currencyUuid: Scalars['UUID'];
  baseCompanyUuid: Scalars['UUID'];
};


export type MutationUploadBookingDocumentArgs = {
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  hardCopyStatus?: Maybe<DocumentHardCopyStatus>;
  location?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Maybe<DocumentInput>>>;
};


export type MutationUpdateBookingDocumentArgs = {
  uuid: Scalars['UUID'];
  type: Scalars['String'];
  remarks?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  hardCopyStatus?: Maybe<DocumentHardCopyStatus>;
  location?: Maybe<Scalars['String']>;
};


export type MutationVerifyBookingDocumentArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationApproveBookingDocumentArgs = {
  uuid: Scalars['UUID'];
  type: Scalars['String'];
};


export type MutationDeleteBookingDocumentArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateDocumentCreatorArgs = {
  input: CreateDocumentCreator;
};


export type MutationCreateDocumentCreatorFromTemplateArgs = {
  templateUuid: Scalars['UUID'];
  bookingUuid: Scalars['UUID'];
};


export type MutationUpdateDocumentCreatorArgs = {
  input?: Maybe<UpdateDocumentCreator>;
};


export type MutationChangeDocumentCreatorStatusArgs = {
  uuid: Scalars['UUID'];
  status: DocumentCreatorStatus;
};


export type MutationChangeDocumentCreatorStatusAdvancedArgs = {
  uuid: Scalars['UUID'];
  status: DocumentCreatorStatus;
};


export type MutationGenerateDocumentCreatorNumberArgs = {
  type?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSONObject']>;
};


export type MutationCreateDocumentCreatorTemplateArgs = {
  input?: Maybe<CreateDocumentCreatorTemplate>;
};


export type MutationUpdateDocumentCreatorTemplateArgs = {
  input?: Maybe<UpdateDocumentCreatorTemplate>;
};


export type MutationDeleteDocumentCreatorTemplateArgs = {
  uuid: Scalars['UUID'];
};


export type MutationUndeleteDocumentCreatorTemplateArgs = {
  uuid: Scalars['UUID'];
};


export type MutationInviteToCompanyArgs = {
  uuid: Scalars['UUID'];
  users: Array<Maybe<InviteUser>>;
};


export type MutationResendInviteArgs = {
  employeeUuid: Scalars['UUID'];
};


export type MutationChangeEmployeeRoleArgs = {
  companyUuid: Scalars['UUID'];
  userUuid: Scalars['UUID'];
  roles: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
};


export type MutationAddEmployeeToDriverArgs = {
  uuid: Scalars['UUID'];
  driverUuid?: Maybe<Scalars['UUID']>;
};


export type MutationRemoveEmployeeArgs = {
  companyUuid: Scalars['UUID'];
  userUuid: Scalars['UUID'];
};


export type MutationCreateExchangeRateArgs = {
  input: CreateExchangeRateInput;
};


export type MutationUpdateExchangeRateArgs = {
  input: UpdateExchangeRateInput;
};


export type MutationDeleteExchangeRateArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateFafArgs = {
  input: CreateFafInput;
};


export type MutationUpdateFafArgs = {
  input: UpdateFafInput;
};


export type MutationDeleteFafArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationMigrateFmsCompanyArgs = {
  code: Scalars['String'];
};


export type MutationMigrateFmsChargesArgs = {
  items?: Maybe<Array<Maybe<ChargeItemMigrateType>>>;
};


export type MutationCreateGlCodeArgs = {
  input: CreateGlCodeInput;
};


export type MutationUpdateGlCodeArgs = {
  input: UpdateGlCodeInput;
};


export type MutationDeleteGlCodeArgs = {
  uuid: Scalars['UUID'];
};


export type MutationUndeleteGlCodeArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCreateGroupArgs = {
  companyUuid: Scalars['UUID'];
  name: Scalars['String'];
};


export type MutationUpdateGroupArgs = {
  input: UpdateGroupInput;
};


export type MutationRemoveGroupArgs = {
  uuid: Scalars['UUID'];
};


export type MutationAddMemberArgs = {
  uuid: Scalars['UUID'];
  employeeUuid: Scalars['UUID'];
};


export type MutationRemoveMemberArgs = {
  uuid: Scalars['UUID'];
  employeeUuid: Scalars['UUID'];
};


export type MutationCreateIntegrationDetailArgs = {
  input: CreateIntegrationDetailInput;
};


export type MutationUpdateIntegrationDetailArgs = {
  input: UpdateIntegrationDetailInput;
};


export type MutationDeleteIntegrationDetailArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateIntegrationMappingArgs = {
  input: CreateIntegrationMappingInput;
};


export type MutationUpdateIntegrationMappingArgs = {
  input: UpdateIntegrationMappingInput;
};


export type MutationDeleteIntegrationMappingArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationAddJobArgs = {
  input: AddJobInput;
};


export type MutationRolloverJobArgs = {
  jobUuid: Scalars['UUID'];
  bookingUuid?: Maybe<Scalars['UUID']>;
};


export type MutationUpdateJobArgs = {
  input?: Maybe<UpdateJobInput>;
};


export type MutationUpdateJobTripsArgs = {
  input?: Maybe<UpdateJobTripInput>;
};


export type MutationDeleteJobArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeleteJobArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationReindexJobArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateJobOptionArgs = {
  input: CreateJobOptionInput;
};


export type MutationUpdateJobOptionArgs = {
  input: UpdateJobOptionInput;
};


export type MutationDeleteJobOptionArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeleteJobOptionArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateJobTypeArgs = {
  input?: Maybe<UpdateJobTypeInput>;
};


export type MutationUpdateJobTypeArgs = {
  input?: Maybe<UpdateJobTypeInput>;
};


export type MutationDeleteJobTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeleteJobTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationAddMonitoringCompanyArgs = {
  uuid: Scalars['UUID'];
};


export type MutationRemoveMonitoringCompanyArgs = {
  uuid: Scalars['UUID'];
};


export type MutationAddPaymentArgs = {
  input: AddPaymentInput;
};


export type MutationUpdatePaymentArgs = {
  input: UpdatePaymentInput;
};


export type MutationDeletePaymentArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreatePermissionArgs = {
  role: Scalars['String'];
  resource: Scalars['String'];
  permission: Scalars['String'];
};


export type MutationDeletePermissionArgs = {
  role: Scalars['String'];
  resource: Scalars['String'];
  permission: Scalars['String'];
};


export type MutationCreatePortalCompanyArgs = {
  input?: Maybe<CreatePortalCompanyInput>;
};


export type MutationUpdatePortalCompanyArgs = {
  input?: Maybe<UpdatePortalCompanyInput>;
};


export type MutationInvitePortalCompanyArgs = {
  input?: Maybe<InvitePortalCompanyInput>;
};


export type MutationUnInvitePortalCompanyArgs = {
  employeeUuid?: Maybe<Scalars['UUID']>;
  portalCompanyUuid?: Maybe<Scalars['UUID']>;
};


export type MutationDeletePortalCompanyArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeletePortalCompanyArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationExpireQuotationArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCreateQuotationArgs = {
  input: CreateQuotationInput;
};


export type MutationUpdateQuotationArgs = {
  input: UpdateQuotationInput;
};


export type MutationCreateQuotationItemArgs = {
  input: CreateQuotationItemInput;
};


export type MutationUpdateQuotationItemArgs = {
  input: UpdateQuotationItemInput;
};


export type MutationDeleteQuotationItemArgs = {
  uuid: Scalars['UUID'];
};


export type MutationSubmitRequestArgs = {
  input: EmailRequestInput;
};


export type MutationSubmitRotArgs = {
  input: SubmitRotInput;
};


export type MutationRequestApproveArgs = {
  uuid: Scalars['UUID'];
  type: RequestType;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationAddSuperAdminArgs = {
  email: Scalars['Email'];
};


export type MutationRemoveSuperAdminArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCreateTaxArgs = {
  input: CreateTaxInput;
};


export type MutationUpdateTaxArgs = {
  input: UpdateTaxInput;
};


export type MutationDeleteTaxArgs = {
  uuid: Scalars['UUID'];
};


export type MutationUndeleteTaxArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCreateTransportAreaCodeArgs = {
  input: CreateTransportAreaCodeInput;
};


export type MutationUpdateTransportAreaCodeArgs = {
  input: UpdateTransportAreaCodeInput;
};


export type MutationDeleteTransportAreaCodeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateTransportJobTypeArgs = {
  input: CreateTransportJobTypeInput;
};


export type MutationUpdateTransportJobTypeArgs = {
  input: UpdateTransportJobTypeInput;
};


export type MutationDeleteTransportJobTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeleteTransportJobTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateTransportRateArgs = {
  input: CreateTransportRateInput;
};


export type MutationUpdateTransportRateArgs = {
  input: UpdateTransportRateInput;
};


export type MutationDeleteTransportRateArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateTransportRateFromBookingArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUpdateTripArgs = {
  input?: Maybe<UpdateTripInput>;
};


export type MutationUpdateUserArgs = {
  input: UserInput;
};


export type MutationUpdateUserPreferenceArgs = {
  type: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};


export type MutationDeleteUserPreferenceArgs = {
  type: Scalars['String'];
  key: Scalars['String'];
};


export type MutationCreateVolumeUnitArgs = {
  input: CreateVolumeUnitInput;
};


export type MutationUpdateVolumeUnitArgs = {
  input: UpdateVolumeUnitInput;
};


export type MutationDeleteVolumeUnitArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeleteVolumeUnitArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateVoucherArgs = {
  input: CreateVoucherInput;
};


export type MutationUpdateVoucherArgs = {
  input: UpdateVoucherInput;
};


export type MutationChangeVoucherStatusArgs = {
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<VoucherStatus>;
};


export type MutationChangeVoucherTypeArgs = {
  uuid: Scalars['UUID'];
  type: Scalars['String'];
};


export type MutationRolloverVoucherArgs = {
  uuid: Scalars['UUID'];
  jobUuid: Scalars['UUID'];
  bookingUuid: Scalars['UUID'];
};


export type MutationCreateVoucherRevisionArgs = {
  uuid: Scalars['UUID'];
  type: VoucherRevisionType;
};


export type MutationLinkDocumentToVoucherArgs = {
  bookingDocumentUuid: Scalars['UUID'];
  voucherUuid: Scalars['UUID'];
};


export type MutationUnlinkDocumentFromVoucherArgs = {
  bookingDocumentUuid: Scalars['UUID'];
  voucherUuid: Scalars['UUID'];
};


export type MutationAddVoucherItemArgs = {
  input: AddVoucherItemInput;
};


export type MutationUpdateVoucherItemArgs = {
  input: UpdateVoucherItemInput;
};


export type MutationDeleteVoucherItemArgs = {
  uuid: Scalars['UUID'];
};


export type MutationTriggerVoucherEventArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateWeightUnitArgs = {
  input: CreateWeightUnitInput;
};


export type MutationUpdateWeightUnitArgs = {
  input: UpdateWeightUnitInput;
};


export type MutationDeleteWeightUnitArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeleteWeightUnitArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUpdateAvailabilityArgs = {
  input?: Maybe<UpdateAvailabilityInput>;
};


export type MutationPopulateAvailabilityArgs = {
  input?: Maybe<PopulateAvailabilityInput>;
};


export type MutationUpdateEntityRequirementsArgs = {
  input: UpdateEntityRequirementsInput;
};


export type MutationUpdateEntityRequirementsCategoryArgs = {
  input: UpdateEntityRequirementCategoryInput;
};


export type MutationAddEntityDocumentArgs = {
  input: AddEntityDocumentInput;
};


export type MutationUpdateEntityDocumentArgs = {
  input: UpdateEntityDocumentInput;
};


export type MutationUpdateEntityDocumentStatusArgs = {
  input: UpdateEntityDocumentStatusInput;
};


export type MutationCreateDriverArgs = {
  input: CreateDriverInput;
};


export type MutationUpdateDriverArgs = {
  input: UpdateDriverInput;
};


export type MutationUpdateDriverStatusArgs = {
  input: UpdateDriverStatusInput;
};


export type MutationUpdateDriverImageArgs = {
  input: UpdateDriverImageInput;
};


export type MutationUpdateDriverCompanyArgs = {
  input: UpdateDriverCompanyInput;
};


export type MutationUpdateDriverEmployeeArgs = {
  input: UpdateDriverEmployeeInput;
};


export type MutationRemoveDriverCompanyArgs = {
  input: RemoveDriverCompanyInput;
};


export type MutationCreateVehicleArgs = {
  input: CreateVehicleInput;
};


export type MutationUpdateVehicleArgs = {
  input: UpdateVehicleInput;
};


export type MutationUpdateVehicleStatusArgs = {
  input: UpdateVehicleStatusInput;
};


export type MutationUpdateVehicleImageArgs = {
  input: UpdateVehicleImageInput;
};


export type MutationUpdateVehicleCompanyArgs = {
  input: UpdateVehicleCompanyInput;
};


export type MutationRemoveVehicleCompanyArgs = {
  input: RemoveVehicleCompanyInput;
};


export type MutationCreateTrailerArgs = {
  input: CreateTrailerInput;
};


export type MutationUpdateTrailerArgs = {
  input: UpdateTrailerInput;
};


export type MutationUpdateTrailerStatusArgs = {
  input: UpdateTrailerStatusInput;
};


export type MutationUpdateTrailerImageArgs = {
  input: UpdateTrailerImageInput;
};


export type MutationUpdateTrailerCompanyArgs = {
  input: UpdateTrailerCompanyInput;
};


export type MutationRemoveTrailerCompanyArgs = {
  input: RemoveTrailerCompanyInput;
};


export type Mutation_JobsConvertEmptyTripsArgs = {
  key?: Maybe<Scalars['String']>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};


export type Mutation_EmptyTripsDataPatchArgs = {
  key?: Maybe<Scalars['String']>;
};


export type MutationAddEmptyTripArgs = {
  input?: Maybe<EmptyTripAddInput>;
};


export type MutationUpdateEmptyTripArgs = {
  input?: Maybe<EmptyTripUpdateInput>;
};


export type MutationUpdateEmptyTripStatusArgs = {
  input?: Maybe<EmptyTripUpdateStatusInput>;
};


export type Mutation_ComputeReportJobSummaryArgs = {
  input?: Maybe<ComputeReportJobSummaryInput>;
};


export type Mutation_PlannerQueueRunnerArgs = {
  input?: Maybe<PlannerQueueRunnerInput>;
};


export type Mutation_TriggerComputeTripSummaryArgs = {
  input?: Maybe<TriggerComputeTripSummaryInput>;
};


export type MutationComputeTripSummaryArgs = {
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
};


export type MutationProcessVehiclePlanArgs = {
  vehicleUuid?: Maybe<Scalars['UUID']>;
  rmTripUuid?: Maybe<Scalars['UUID']>;
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};


export type MutationCreateReportArgs = {
  input?: Maybe<CreateReportInput>;
};


export type MutationUpdateReportArgs = {
  input?: Maybe<UpdateReportInput>;
};


export type MutationDeleteReportArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationAssignPortalCompanyReportArgs = {
  input?: Maybe<AssignPortalCompanyInput>;
};


export type MutationUnassignPortalCompanyReportArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationGenerateReportArgs = {
  input?: Maybe<GenerateReportInput>;
};


export type MutationProcessReportPortalCompanyArgs = {
  input?: Maybe<ProcessReportPortalCompanyInput>;
};


export type MutationApproveFuelArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCancelFuelArgs = {
  uuid: Scalars['UUID'];
};


export type MutationUnapproveFuelArgs = {
  uuid: Scalars['UUID'];
};


export type MutationUncancelFuelArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCreateFuelArgs = {
  input?: Maybe<CreateFuelInput>;
};


export type MutationUpdateFuelArgs = {
  input?: Maybe<UpdateFuelInput>;
};


export type MutationCreateGateLogArgs = {
  input?: Maybe<CreateGateLogInput>;
};


export type MutationUpdateGateLogArgs = {
  input?: Maybe<UpdateGateLogInput>;
};


export type MutationCancelGateLogArgs = {
  uuid: Scalars['UUID'];
};


export type MutationUncancelGateLogArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCreateIncentiveArgs = {
  input?: Maybe<CreateIncentiveInput>;
};


export type MutationUpdateIncentiveArgs = {
  input?: Maybe<UpdateIncentiveInput>;
};


export type MutationDeleteIncentiveArgs = {
  uuid: Scalars['UUID'];
};


export type MutationUndeleteIncentiveArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCreateIncentiveRateArgs = {
  input?: Maybe<CreateIncentiveRateInput>;
};


export type MutationUpdateIncentiveRateArgs = {
  input?: Maybe<UpdateIncentiveRateInput>;
};


export type MutationDeleteIncentiveRateArgs = {
  uuid: Scalars['UUID'];
};


export type MutationCreateIncentiveTypeArgs = {
  input?: Maybe<CreateIncentiveTypeInput>;
};


export type MutationUpdateIncentiveTypeArgs = {
  input?: Maybe<UpdateIncentiveTypeInput>;
};


export type MutationDeleteIncentiveTypeArgs = {
  input?: Maybe<DeleteIncentiveTypeInput>;
};


export type MutationUndeleteIncentiveTypeArgs = {
  input?: Maybe<UndeleteIncentiveTypeInput>;
};


export type MutationCreateIncentiveVoucherArgs = {
  input: CreateIncentiveVoucherInput;
};


export type MutationUpdateIncentiveVoucherArgs = {
  input: UpdateIncentiveVoucherInput;
};


export type MutationApproveIncentiveVoucherArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUnapproveIncentiveVoucherArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationApproveIncentiveVoucherFinanceArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUnapproveIncentiveVoucherFinanceArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCancelIncentiveVoucherArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUncancelIncentiveVoucherArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type Mutation_TransportQueueRunnerArgs = {
  input?: Maybe<TransportQueueRunnerInput>;
};


export type Mutation_JobsConvertLegsArgs = {
  key?: Maybe<Scalars['String']>;
};


export type Mutation_TriggerJobReportsArgs = {
  input?: Maybe<TriggerJobReportsInput>;
};


export type Mutation_JobsDataPatchArgs = {
  key?: Maybe<Scalars['String']>;
};


export type MutationProcessTransportBookingArgs = {
  input: BookingTransportInput;
};


export type MutationUpdateTransportJobAddressArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationProcessAllJobsArgs = {
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationProcessJobArgs = {
  tripUuid?: Maybe<Scalars['UUID']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationAddLegArgs = {
  input: AddLegInput;
};


export type MutationUpdateLegArgs = {
  input: UpdateLegInput;
};


export type MutationUpdateLegTimingArgs = {
  input: UpdateLegTimingInput;
};


export type MutationDeleteLegArgs = {
  input?: Maybe<DeleteLegInput>;
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUndeleteLegArgs = {
  input?: Maybe<DeleteLegInput>;
};


export type MutationRecomputeLegActivitiesArgs = {
  input?: Maybe<RecomputeLegActivitiesQuery>;
};


export type MutationAddManifestArgs = {
  input?: Maybe<AddManifestInput>;
};


export type MutationDeleteManifestsArgs = {
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};


export type MutationCloseManifestsArgs = {
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};


export type MutationAddLegsToManifestArgs = {
  input?: Maybe<AddManifestLegsInput>;
};


export type MutationAddTripsToManifestArgs = {
  input?: Maybe<AddManifestTripsInput>;
};


export type MutationEndTripsInManifestArgs = {
  input?: Maybe<EndManifestTripsInput>;
};


export type MutationRemoveLegsFromManifestArgs = {
  input?: Maybe<RemoveManifestLegsInput>;
};


export type MutationOpenShiftArgs = {
  input: OpenShiftInput;
};


export type MutationCloseShiftArgs = {
  input: CloseShiftInput;
};


export type MutationUpdateShiftArgs = {
  input: UpdateShiftInput;
};


export type MutationApproveShiftArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUnapproveShiftArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationApproveShiftFinanceArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUnapproveShiftFinanceArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCancelShiftArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationUncancelShiftArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type MutationCreateYardArgs = {
  input: CreateYardInput;
};


export type MutationUpdateYardArgs = {
  input: UpdateYardInput;
};


export type MutationDeleteYardArgs = {
  uuid: Scalars['UUID'];
};


export type MutationUndeleteYardArgs = {
  uuid: Scalars['UUID'];
};

export type NumberPagination = {
  __typename?: 'numberPagination';
  count?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type OpenShiftInput = {
  _id?: Maybe<Scalars['UUID']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  start?: Maybe<Scalars['DateTime']>;
  remarks?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type Payment = {
  __typename?: 'Payment';
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<PaymentStatus>;
  remarks?: Maybe<Scalars['String']>;
  transactionType?: Maybe<PaymentTransactionType>;
  reference?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  voucherPayments?: Maybe<Array<Maybe<VoucherPayment>>>;
};

export type Payments = {
  __typename?: 'Payments';
  rows?: Maybe<Array<Maybe<Payment>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum PaymentStatus {
  Paid = 'PAID',
  Voided = 'VOIDED'
}

export enum PaymentTransactionType {
  WireTransfer = 'WIRE_TRANSFER',
  Cash = 'CASH',
  Cheque = 'CHEQUE',
  Other = 'OTHER'
}

export enum PaymentType {
  Cash = 'CASH',
  Credit = 'CREDIT'
}

export type Permission = {
  __typename?: 'Permission';
  resources?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Permissions = {
  __typename?: 'Permissions';
  role?: Maybe<Scalars['String']>;
  rolePermissions?: Maybe<Array<Maybe<Permission>>>;
};

export type PermissionType = {
  __typename?: 'PermissionType';
  canApprove?: Maybe<Scalars['Boolean']>;
  canReject?: Maybe<Scalars['Boolean']>;
};

export type Place = {
  __typename?: 'Place';
  placeId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Geometry>;
  country?: Maybe<Country>;
};

export type PlaceResults = {
  __typename?: 'PlaceResults';
  placeId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PlannerQueueRunnerInput = {
  key?: Maybe<Scalars['String']>;
  queueName?: Maybe<Scalars['String']>;
  queueContent?: Maybe<Scalars['JSON']>;
};

export type PmUtilDept = {
  __typename?: 'PmUtilDept';
  dept?: Maybe<Scalars['String']>;
  c?: Maybe<Scalars['Int']>;
  tot?: Maybe<Scalars['Int']>;
};

export type Point = {
  __typename?: 'Point';
  type?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type PopulateAvailabilityInput = {
  date?: Maybe<Scalars['DateTime']>;
  type?: Maybe<EntityType>;
};

export type Port = {
  __typename?: 'Port';
  uuid?: Maybe<Scalars['UUID']>;
  nameAlternatives?: Maybe<Array<Maybe<Scalars['String']>>>;
  locodeAlternatives?: Maybe<Array<Maybe<Scalars['String']>>>;
  cnName?: Maybe<Scalars['String']>;
  cnIso2?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  countryAlpha3?: Maybe<Scalars['LimitedString']>;
  distance?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export type PortalCompanies = {
  __typename?: 'PortalCompanies';
  rows?: Maybe<Array<Maybe<PortalCompany>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type PortalCompany = {
  __typename?: 'PortalCompany';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<CompanyStatus>;
  details?: Maybe<PortalCompanyDetails>;
  viewCompanies?: Maybe<Array<Maybe<Company>>>;
  bookCompanies?: Maybe<Array<Maybe<Company>>>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  reports?: Maybe<PortalReports>;
};

export type PortalCompanyDetails = {
  __typename?: 'PortalCompanyDetails';
  userTimeout?: Maybe<Scalars['Int']>;
};

export type PortalCompanyDetailsInput = {
  userTimeout?: Maybe<Scalars['Int']>;
};

export enum PortalCompanyQueryType {
  View = 'view',
  Book = 'book',
  All = 'all'
}

export type PortalCompanyReportConfig = {
  __typename?: 'PortalCompanyReportConfig';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  hours?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type PortalCompanyReportConfigInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  hours?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type PortalReports = {
  __typename?: 'PortalReports';
  portalCompanyUuid?: Maybe<Scalars['UUID']>;
  rows?: Maybe<Array<Maybe<ReportPortalCompany>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type Ports = {
  __typename?: 'Ports';
  rows?: Maybe<Array<Maybe<Port>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type ProcessFlow = {
  __typename?: 'ProcessFlow';
  type?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<ProcessFlowSection>>>;
};

export type ProcessFlowChronologiesType = {
  __typename?: 'ProcessFlowChronologiesType';
  type?: Maybe<Scalars['String']>;
  isJobRequired?: Maybe<Scalars['Boolean']>;
  isTripRequired?: Maybe<Scalars['Boolean']>;
};

export type ProcessFlowCreateType = {
  __typename?: 'ProcessFlowCreateType';
  type?: Maybe<Scalars['String']>;
  bookingDocuments?: Maybe<Array<Maybe<ProcessFlowDocumentType>>>;
  chronologies?: Maybe<Array<Maybe<ProcessFlowChronologiesType>>>;
};

export type ProcessFlowDocumentType = {
  __typename?: 'ProcessFlowDocumentType';
  type?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  isJobRequired?: Maybe<Scalars['Boolean']>;
  isTripRequired?: Maybe<Scalars['Boolean']>;
  approvals?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProcessFlowRequestType = {
  __typename?: 'ProcessFlowRequestType';
  type?: Maybe<Scalars['String']>;
};

export type ProcessFlowSection = {
  __typename?: 'ProcessFlowSection';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  bookingDocuments?: Maybe<Array<Maybe<ProcessFlowDocumentType>>>;
  vouchers?: Maybe<Array<Maybe<ProcessFlowVoucherType>>>;
  requests?: Maybe<Array<Maybe<ProcessFlowRequestType>>>;
  chronologies?: Maybe<Array<Maybe<ProcessFlowChronologiesType>>>;
  steps?: Maybe<Array<Maybe<ProcessFlowStepType>>>;
  display?: Maybe<Scalars['Boolean']>;
};

export type ProcessFlowStepType = {
  __typename?: 'ProcessFlowStepType';
  key?: Maybe<Scalars['String']>;
  helpText?: Maybe<Scalars['String']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  isCurrentStep?: Maybe<Scalars['Boolean']>;
  permission?: Maybe<PermissionType>;
};

export type ProcessFlowVoucherType = {
  __typename?: 'ProcessFlowVoucherType';
  type?: Maybe<Scalars['String']>;
  transactionCategory?: Maybe<VoucherCategoryType>;
  transactionType?: Maybe<VoucherTypeType>;
  approvals?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookingDocuments?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProcessReportPortalCompanyInput = {
  portalCompanyUuid?: Maybe<Scalars['UUID']>;
  match?: Maybe<Scalars['JSON']>;
};

export type ProcessTypeCategories = {
  __typename?: 'ProcessTypeCategories';
  value?: Maybe<Scalars['String']>;
};

export type ProcessTypes = {
  __typename?: 'ProcessTypes';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['String'];
  name: Scalars['String'];
  displayName: Scalars['String'];
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  addresses?: Maybe<Addresses>;
  address?: Maybe<Address>;
  approvals?: Maybe<Approvals>;
  approval?: Maybe<Approval>;
  viewer?: Maybe<Viewer>;
  baseCompanies?: Maybe<BaseCompanies>;
  baseCompany?: Maybe<BaseCompany>;
  getBaseCompanyTypes?: Maybe<Array<Maybe<ProcessTypes>>>;
  getTypeCategories?: Maybe<Array<Maybe<ProcessTypeCategories>>>;
  getSettingAreaCodeInputRequirement?: Maybe<BcSettingAreaCode>;
  getBaseCompanyAddress?: Maybe<Address>;
  getTimezones?: Maybe<Array<Maybe<Scalars['String']>>>;
  settings?: Maybe<BaseCompanySettings>;
  setting?: Maybe<BaseCompanySetting>;
  counters?: Maybe<CounterResults>;
  billingUnits?: Maybe<BillingUnits>;
  billingUnit?: Maybe<BillingUnit>;
  booking?: Maybe<Booking>;
  bookingPublic?: Maybe<Scalars['JSON']>;
  bookingEvents?: Maybe<Array<Maybe<Event>>>;
  bookingsSearch?: Maybe<Bookings>;
  bookingsSearchJson?: Maybe<BookingsJson>;
  bookingSummary?: Maybe<Array<Maybe<BookingSummary>>>;
  bookingTypes?: Maybe<BookingTypes>;
  bookingType?: Maybe<BookingType>;
  flowTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  channels?: Maybe<Channels>;
  channel?: Maybe<Channel>;
  chargeCategories?: Maybe<ChargeCategories>;
  chargeCategory?: Maybe<ChargeCategory>;
  chargeItem?: Maybe<ChargeItem>;
  chargeItems?: Maybe<ChargeItems>;
  chargeItemMiscs?: Maybe<ChargeItemMiscs>;
  chargeItemMisc?: Maybe<ChargeItemMisc>;
  commodityTypes?: Maybe<CommodityTypes>;
  companies?: Maybe<Companies>;
  company?: Maybe<Company>;
  companyAccessExternalBaseCompany?: Maybe<Array<Maybe<BaseCompany>>>;
  companyAccess?: Maybe<CompanyAccess>;
  companyAccesses?: Maybe<CompanyAccesses>;
  inviteCompanyAccess?: Maybe<InviteCompanyAccess>;
  inviteCompanyAccesses?: Maybe<InviteCompanyAccesses>;
  consolVoucher?: Maybe<ConsolVoucher>;
  consolVouchers?: Maybe<ConsolVouchers>;
  contacts?: Maybe<Contacts>;
  contact?: Maybe<Contact>;
  containerGrades?: Maybe<ContainerGrades>;
  containerGrade?: Maybe<ContainerGrade>;
  containerTypes?: Maybe<ContainerTypes>;
  containerType?: Maybe<ContainerType>;
  costItems?: Maybe<Array<Maybe<CostItem>>>;
  costSheet?: Maybe<Array<Maybe<CostSheet>>>;
  countries?: Maybe<Countries>;
  currencies?: Maybe<Currencies>;
  currency?: Maybe<Currency>;
  bookingDocuments?: Maybe<BookingDocuments>;
  bookingDocument?: Maybe<BookingDocument>;
  documentCreators?: Maybe<DocumentCreators>;
  documentCreator?: Maybe<DocumentCreator>;
  documentCreatorTemplates?: Maybe<DocumentCreatorTemplates>;
  documentCreatorTemplate?: Maybe<DocumentCreatorTemplate>;
  employees?: Maybe<Employees>;
  employee?: Maybe<Employee>;
  eventsEtc?: Maybe<EventsEtc>;
  eventsVoucher?: Maybe<EventVouchers>;
  exchangeRates?: Maybe<ExchangeRates>;
  exchangeRate?: Maybe<ExchangeRate>;
  fafs?: Maybe<Fafs>;
  faf?: Maybe<Faf>;
  searchFmsCompanies?: Maybe<Array<Maybe<FmsCompany>>>;
  glCodes?: Maybe<GlCodes>;
  glCode?: Maybe<GlCode>;
  groups?: Maybe<Groups>;
  group?: Maybe<Group>;
  integrations?: Maybe<Integrations>;
  integrationDetails?: Maybe<IntegrationDetails>;
  integrationDetail?: Maybe<IntegrationDetail>;
  integrationLog?: Maybe<IntegrationLog>;
  integrationLogs?: Maybe<IntegrationLogs>;
  integrationMappings?: Maybe<IntegrationMappings>;
  integrationMapping?: Maybe<IntegrationMapping>;
  jobs?: Maybe<Jobs>;
  job?: Maybe<Job>;
  jobsSearch?: Maybe<Jobs>;
  jobsSearchJson?: Maybe<JobsJson>;
  jobOptions?: Maybe<JobOptions>;
  jobOption?: Maybe<JobOption>;
  jobTypes?: Maybe<JobTypes>;
  jobType?: Maybe<JobType>;
  monitoringCompanies?: Maybe<Companies>;
  payments?: Maybe<Payments>;
  payment?: Maybe<Payment>;
  permissionIsAllowed?: Maybe<Scalars['Boolean']>;
  permission?: Maybe<Array<Maybe<Permission>>>;
  permissionTypes?: Maybe<Array<Maybe<Permission>>>;
  places?: Maybe<Array<Maybe<PlaceResults>>>;
  place?: Maybe<Place>;
  ports?: Maybe<Ports>;
  port?: Maybe<Port>;
  portalCompanies?: Maybe<PortalCompanies>;
  portalCompany?: Maybe<PortalCompany>;
  processFlowDashboard?: Maybe<Array<Maybe<ProcessFlow>>>;
  processFlowMap?: Maybe<Scalars['String']>;
  processFlowTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  processFlowCreate?: Maybe<ProcessFlowCreateType>;
  transportActivities?: Maybe<Array<Maybe<TransportActivityFlow>>>;
  serviceTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  profile?: Maybe<Profile>;
  quotations?: Maybe<Quotations>;
  quotation?: Maybe<Quotation>;
  rates?: Maybe<Array<Maybe<Rate>>>;
  requestEmailResults?: Maybe<Array<Maybe<RequestEmailResultsType>>>;
  requestTemplate?: Maybe<RequisitionTemplate>;
  roles?: Maybe<Roles>;
  seaRoute?: Maybe<SeaRoute>;
  search?: Maybe<Search>;
  shippingRates?: Maybe<ShippingRates>;
  superAdmins?: Maybe<SuperAdmins>;
  taxes?: Maybe<Taxes>;
  tax?: Maybe<Tax>;
  emailTemplate?: Maybe<Template>;
  actionTemplate?: Maybe<ActionTemplate>;
  actionTemplates?: Maybe<Array<Maybe<ActionTemplate>>>;
  transportAreaCodes?: Maybe<TransportAreaCodes>;
  transportAreaCode?: Maybe<TransportAreaCode>;
  transportAreaCodeFromLocation?: Maybe<TransportAreaCode>;
  transportJobTypes?: Maybe<TransportJobTypes>;
  transportJobType?: Maybe<TransportJobType>;
  transportRates?: Maybe<TransportRates>;
  transportRate?: Maybe<TransportRate>;
  getTransportRate?: Maybe<TransportRateDetails>;
  trip?: Maybe<Trip>;
  trips?: Maybe<Trips>;
  users?: Maybe<Users>;
  user?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  userPreferences?: Maybe<Array<Maybe<UserPreference>>>;
  getUserTimeout?: Maybe<UserTimeout>;
  vessels?: Maybe<Array<Maybe<Vessel>>>;
  volumeUnits?: Maybe<VolumeUnits>;
  volumeUnit?: Maybe<VolumeUnit>;
  voucher?: Maybe<Voucher>;
  vouchers?: Maybe<Vouchers>;
  voucherItems?: Maybe<Array<Maybe<VoucherItem>>>;
  vouchersSearch?: Maybe<Vouchers>;
  vouchersSearchJson?: Maybe<VouchersJson>;
  weightUnits?: Maybe<WeightUnits>;
  weightUnit?: Maybe<WeightUnit>;
  availability?: Maybe<Availability>;
  availabilities?: Maybe<AvailabilitiesResults>;
  entityDocument?: Maybe<DocumentDescription>;
  driver?: Maybe<Driver>;
  drivers?: Maybe<DriversResults>;
  signDriverBehaviorAuth?: Maybe<DriverBehaviorAuth>;
  vehicle?: Maybe<Vehicle>;
  vehicles?: Maybe<VehiclesResults>;
  trailer?: Maybe<Trailer>;
  trailers?: Maybe<TrailersResults>;
  emptyTrip?: Maybe<EmptyTrip>;
  emptyTrips?: Maybe<EmptyTrips>;
  precomputeEmptyTrip?: Maybe<Scalars['JSON']>;
  jobSummary?: Maybe<JobSummary>;
  jobSummaries?: Maybe<JobSummaries>;
  legSummary?: Maybe<LegSummary>;
  legSummaries?: Maybe<LegSummaries>;
  reportJobSummary?: Maybe<ReportJobSummary>;
  reportJobSummaries?: Maybe<ReportJobSummaries>;
  tripSummary?: Maybe<TripSummary>;
  tripSummaries?: Maybe<TripSummaries>;
  processVehiclePlan?: Maybe<Scalars['JSON']>;
  report?: Maybe<Report>;
  reports?: Maybe<Reports>;
  reportFields?: Maybe<Array<Maybe<ReportField>>>;
  reportMeta?: Maybe<ReportMeta>;
  reportList?: Maybe<Array<Maybe<ReportSummary>>>;
  processReportPortalCompany?: Maybe<Response>;
  fuel?: Maybe<Fuel>;
  fuels?: Maybe<Fuels>;
  gateLog?: Maybe<GateLog>;
  gateLogs?: Maybe<GateLogs>;
  incentive?: Maybe<Incentive>;
  incentives?: Maybe<Incentives>;
  incentiveRate?: Maybe<IncentiveRate>;
  incentiveRates?: Maybe<IncentiveRates>;
  incentiveType?: Maybe<IncentiveType>;
  incentiveTypes?: Maybe<IncentiveTypes>;
  incentiveVoucher?: Maybe<IncentiveVoucher>;
  incentiveVouchers?: Maybe<IncentiveVouchers>;
  incentiveVouchersJson?: Maybe<Scalars['JSON']>;
  transportJob?: Maybe<TransportJob>;
  transportJobs?: Maybe<TransportJobs>;
  transportJobsJson?: Maybe<Scalars['JSON']>;
  legActivities?: Maybe<LegActivities>;
  manifest?: Maybe<Manifest>;
  manifests?: Maybe<Manifests>;
  transportReportJob?: Maybe<TransportReportJob>;
  transportReportJobs?: Maybe<TransportReportJobs>;
  transportReportJobsJson?: Maybe<Scalars['JSON']>;
  transportReportLegActivities?: Maybe<TransportReportLegActivities>;
  transportReportLegActivitiesJson?: Maybe<Scalars['JSON']>;
  transportReportTrip?: Maybe<TransportReportTrip>;
  transportReportTrips?: Maybe<TransportReportTrips>;
  transportReportTripsJson?: Maybe<Scalars['JSON']>;
  shift?: Maybe<Shift>;
  shifts?: Maybe<Shifts>;
  shiftsJson?: Maybe<Scalars['JSON']>;
  truckLocation?: Maybe<Array<Maybe<TruckLocation>>>;
  truckLocationLatest?: Maybe<TruckLocation>;
  truckLocationByTrips?: Maybe<Array<Maybe<TripLocations>>>;
  trucksSpeeds?: Maybe<Array<Maybe<TruckSpeeds>>>;
  reverseGeocode?: Maybe<Geocodes>;
  yard?: Maybe<Yard>;
  yards?: Maybe<Yards>;
};


export type QueryAddressesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  companyUuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Array<Maybe<AddressType>>>;
  statuses?: Maybe<Array<Maybe<AddressStatus>>>;
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  queryByOwner?: Maybe<Scalars['Boolean']>;
};


export type QueryAddressArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryApprovalsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  voucherUuid?: Maybe<Scalars['UUID']>;
  requestUuid?: Maybe<Scalars['UUID']>;
  voucherType?: Maybe<Scalars['String']>;
  requestType?: Maybe<Scalars['String']>;
};


export type QueryApprovalArgs = {
  uuid: Scalars['UUID'];
};


export type QueryViewerArgs = {
  userToken?: Maybe<Scalars['String']>;
  auth0UserId?: Maybe<Scalars['String']>;
};


export type QueryBaseCompaniesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  types?: Maybe<Array<CompanyType>>;
  countryAlpha3?: Maybe<Scalars['LimitedString']>;
  query?: Maybe<Scalars['String']>;
};


export type QueryBaseCompanyArgs = {
  uuid?: Maybe<Scalars['UUID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryGetTypeCategoriesArgs = {
  processType: Scalars['String'];
};


export type QuerySettingsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySettingArgs = {
  key?: Maybe<Scalars['String']>;
};


export type QueryCountersArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryBillingUnitsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<BillingUnitStatus>>>;
};


export type QueryBillingUnitArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryBookingArgs = {
  uuid?: Maybe<Scalars['UUID']>;
  no?: Maybe<Scalars['String']>;
};


export type QueryBookingPublicArgs = {
  nos?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryBookingEventsArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryBookingsSearchArgs = {
  input?: Maybe<BookingsSearchInput>;
};


export type QueryBookingsSearchJsonArgs = {
  input?: Maybe<BookingsSearchInput>;
};


export type QueryBookingTypesArgs = {
  q?: Maybe<Scalars['String']>;
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  statuses?: Maybe<Array<Maybe<BookingTypeStatus>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryBookingTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
};


export type QueryChannelsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryChannelArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryChargeCategoriesArgs = {
  query?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<ChargeItemStatus>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryChargeCategoryArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryChargeItemArgs = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type QueryChargeItemsArgs = {
  query?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryChargeItemMiscsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  customerUuid?: Maybe<Scalars['UUID']>;
  chargeItemUuid?: Maybe<Scalars['UUID']>;
};


export type QueryChargeItemMiscArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryCommodityTypesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryCompaniesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  types?: Maybe<Array<Maybe<CompanyType>>>;
  accountTypes?: Maybe<Array<Maybe<AccountType>>>;
  countryAlpha3?: Maybe<Scalars['LimitedString']>;
  portalCompanyQueryType?: Maybe<PortalCompanyQueryType>;
  statuses?: Maybe<Array<CompanyStatus>>;
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  query?: Maybe<Scalars['String']>;
};


export type QueryCompanyArgs = {
  uuid: Scalars['UUID'];
};


export type QueryCompanyAccessArgs = {
  uuid: Scalars['UUID'];
};


export type QueryCompanyAccessesArgs = {
  externalBaseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  types?: Maybe<Array<Maybe<CompanyAccessType>>>;
  statuses?: Maybe<Array<Maybe<CompanyAccessStatus>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryInviteCompanyAccessArgs = {
  uuid: Scalars['UUID'];
};


export type QueryInviteCompanyAccessesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryConsolVoucherArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryConsolVouchersArgs = {
  input?: Maybe<SearchConsolVouchersInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryContactsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  companyUuid?: Maybe<Scalars['UUID']>;
  statuses?: Maybe<Array<Maybe<ContactStatus>>>;
};


export type QueryContactArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryContainerGradesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryContainerGradeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryContainerTypesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryContainerTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryCostItemsArgs = {
  uuid: Scalars['UUID'];
};


export type QueryCostSheetArgs = {
  uuid: Scalars['UUID'];
};


export type QueryCountriesArgs = {
  query?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryCurrenciesArgs = {
  query?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryCurrencyArgs = {
  uuid: Scalars['UUID'];
};


export type QueryBookingDocumentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  voucherUuid?: Maybe<Scalars['UUID']>;
  requestUuid?: Maybe<Scalars['UUID']>;
  voucherType?: Maybe<Scalars['String']>;
  requestType?: Maybe<Scalars['String']>;
};


export type QueryBookingDocumentArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryDocumentCreatorsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
};


export type QueryDocumentCreatorArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryDocumentCreatorTemplatesArgs = {
  q?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  statuses?: Maybe<Array<Maybe<DocumentCreatorTemplateStatus>>>;
};


export type QueryDocumentCreatorTemplateArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryEmployeesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  companyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};


export type QueryEmployeeArgs = {
  uuid: Scalars['UUID'];
};


export type QueryEventsEtcArgs = {
  input?: Maybe<QueryEventEtc>;
};


export type QueryEventsVoucherArgs = {
  input?: Maybe<QueryEventVoucher>;
};


export type QueryExchangeRatesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  fromUuid?: Maybe<Scalars['UUID']>;
  toUuid?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
};


export type QueryExchangeRateArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryFafsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  vendorUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  customerUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  date?: Maybe<Scalars['DateTime']>;
};


export type QueryFafArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QuerySearchFmsCompaniesArgs = {
  query: Scalars['String'];
};


export type QueryGlCodesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
  status?: Maybe<GlCodeStatus>;
};


export type QueryGlCodeArgs = {
  uuid: Scalars['UUID'];
};


export type QueryGroupsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  companyUuid?: Maybe<Scalars['UUID']>;
};


export type QueryGroupArgs = {
  uuid: Scalars['UUID'];
};


export type QueryIntegrationsArgs = {
  query?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryIntegrationDetailsArgs = {
  query?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryIntegrationDetailArgs = {
  uuid: Scalars['UUID'];
};


export type QueryIntegrationLogArgs = {
  uuid: Scalars['UUID'];
};


export type QueryIntegrationLogsArgs = {
  voucherUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  costItemUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryIntegrationMappingsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  customerUuid?: Maybe<Scalars['UUID']>;
};


export type QueryIntegrationMappingArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryJobsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  bookingUuid: Scalars['UUID'];
};


export type QueryJobArgs = {
  uuid: Scalars['UUID'];
};


export type QueryJobsSearchArgs = {
  input?: Maybe<JobsSearchInput>;
};


export type QueryJobsSearchJsonArgs = {
  input?: Maybe<JobsSearchInput>;
};


export type QueryJobOptionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryJobOptionArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryJobTypesArgs = {
  q?: Maybe<Scalars['String']>;
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  statuses?: Maybe<Array<Maybe<JobTypeStatus>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryJobTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
};


export type QueryMonitoringCompaniesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryPaymentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  voucherUuid?: Maybe<Scalars['UUID']>;
};


export type QueryPaymentArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryPermissionIsAllowedArgs = {
  resource?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
};


export type QueryPermissionArgs = {
  role?: Maybe<Scalars['String']>;
};


export type QueryPlacesArgs = {
  q?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['LimitedString']>;
};


export type QueryPlaceArgs = {
  placeId?: Maybe<Scalars['String']>;
};


export type QueryPortsArgs = {
  countryAlpha3?: Maybe<Scalars['LimitedString']>;
  countryAlpha2?: Maybe<Scalars['LimitedString2']>;
  query?: Maybe<Scalars['String']>;
  center?: Maybe<Array<Maybe<Scalars['Float']>>>;
  orderBy?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryPortArgs = {
  uuid: Scalars['UUID'];
};


export type QueryPortalCompaniesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
};


export type QueryPortalCompanyArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryProcessFlowDashboardArgs = {
  type: Scalars['String'];
};


export type QueryProcessFlowMapArgs = {
  type: Scalars['String'];
  process: Scalars['String'];
};


export type QueryProcessFlowCreateArgs = {
  type: Scalars['String'];
};


export type QueryTransportActivitiesArgs = {
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
};


export type QueryQuotationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  valid?: Maybe<Scalars['Boolean']>;
  buyerUuid?: Maybe<Scalars['UUID']>;
  sellerUuid?: Maybe<Scalars['UUID']>;
  statuses?: Maybe<Array<Maybe<QuotationStatus>>>;
  q?: Maybe<Scalars['String']>;
};


export type QueryQuotationArgs = {
  uuid: Scalars['UUID'];
};


export type QueryRatesArgs = {
  fromCity?: Maybe<Scalars['String']>;
  fromPort?: Maybe<Scalars['String']>;
  toPort?: Maybe<Scalars['String']>;
  toCity?: Maybe<Scalars['String']>;
  gp20?: Maybe<Scalars['Int']>;
  gp40?: Maybe<Scalars['Int']>;
  hc40?: Maybe<Scalars['Int']>;
  hc45?: Maybe<Scalars['Int']>;
  goodsType?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipmentType?: Maybe<Scalars['String']>;
};


export type QueryRequestEmailResultsArgs = {
  uuid: Scalars['UUID'];
};


export type QueryRequestTemplateArgs = {
  uuid?: Maybe<Scalars['UUID']>;
  bookingType?: Maybe<Scalars['String']>;
  type?: Maybe<RequestType>;
};


export type QueryRolesArgs = {
  input?: Maybe<RolesQuery>;
};


export type QuerySearchArgs = {
  input?: Maybe<SearchInput>;
};


export type QueryShippingRatesArgs = {
  shipmentType?: Maybe<Scalars['String']>;
  fromPort?: Maybe<Scalars['String']>;
  toCity?: Maybe<Scalars['String']>;
  twentyContainer?: Maybe<Scalars['Int']>;
  fourtyContainer?: Maybe<Scalars['Int']>;
  fourtyHCContainer?: Maybe<Scalars['Int']>;
  fourtyFiveHCContainer?: Maybe<Scalars['Int']>;
  volume?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QuerySuperAdminsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryTaxesArgs = {
  q?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  showAll?: Maybe<Scalars['Boolean']>;
};


export type QueryTaxArgs = {
  uuid: Scalars['UUID'];
};


export type QueryEmailTemplateArgs = {
  name: Scalars['String'];
  countryCode?: Maybe<Scalars['LimitedString']>;
  language?: Maybe<Scalars['LimitedString3']>;
};


export type QueryActionTemplateArgs = {
  resource: TemplateResource;
  type: Scalars['String'];
  bookingType: Scalars['String'];
};


export type QueryActionTemplatesArgs = {
  resource: TemplateResource;
  bookingType: Scalars['String'];
};


export type QueryTransportAreaCodesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
};


export type QueryTransportAreaCodeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryTransportAreaCodeFromLocationArgs = {
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  plusCode?: Maybe<Scalars['String']>;
};


export type QueryTransportJobTypesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTransportJobTypeArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryTransportRatesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  customerUuid?: Maybe<Scalars['UUID']>;
  vendorUuid?: Maybe<Scalars['UUID']>;
  q?: Maybe<Scalars['String']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  to?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTransportRateArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryGetTransportRateArgs = {
  selector: TransportRateSelector;
  options: TransportRateOptions;
};


export type QueryTripArgs = {
  uuid?: Maybe<Scalars['UUID']>;
  waybillId?: Maybe<Scalars['String']>;
};


export type QueryTripsArgs = {
  jobUuid?: Maybe<Scalars['UUID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  q?: Maybe<Scalars['String']>;
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  companyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  uuid?: Maybe<Scalars['UUID']>;
  auth0?: Maybe<Scalars['String']>;
};


export type QueryGetUsersArgs = {
  userUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};


export type QueryUserPreferencesArgs = {
  type?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryVesselsArgs = {
  q?: Maybe<Scalars['String']>;
};


export type QueryVolumeUnitsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryVolumeUnitArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryVoucherArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryVouchersArgs = {
  input?: Maybe<SearchVouchersInput>;
};


export type QueryVoucherItemsArgs = {
  input?: Maybe<VoucherItemQueryInput>;
};


export type QueryVouchersSearchArgs = {
  input?: Maybe<VouchersSearchInput>;
};


export type QueryVouchersSearchJsonArgs = {
  input?: Maybe<VouchersSearchInput>;
};


export type QueryWeightUnitsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryWeightUnitArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryAvailabilityArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryAvailabilitiesArgs = {
  input?: Maybe<QueryAvailabilitiesInput>;
};


export type QueryEntityDocumentArgs = {
  uuid: Scalars['UUID'];
};


export type QueryDriverArgs = {
  uuid?: Maybe<Scalars['UUID']>;
  employeeUuid?: Maybe<Scalars['UUID']>;
};


export type QueryDriversArgs = {
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<DriverStatus>>>;
  ownerTypes?: Maybe<Array<Maybe<DriverOwnerType>>>;
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  companyUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  customerUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  subContractorUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryVehicleArgs = {
  uuid: Scalars['UUID'];
};


export type QueryVehiclesArgs = {
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<VehicleStatus>>>;
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  companyUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  customerUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  subContractorUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryTrailerArgs = {
  uuid: Scalars['UUID'];
};


export type QueryTrailersArgs = {
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<TrailerStatus>>>;
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  companyUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  customerUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  subContractorUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryEmptyTripArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryEmptyTripsArgs = {
  input?: Maybe<EmptyTripQuery>;
};


export type QueryPrecomputeEmptyTripArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryJobSummaryArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryJobSummariesArgs = {
  input?: Maybe<JobSummariesQueryInput>;
};


export type QueryLegSummaryArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryLegSummariesArgs = {
  input?: Maybe<LegSummariesQueryInput>;
};


export type QueryReportJobSummaryArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryReportJobSummariesArgs = {
  input?: Maybe<ReportJobSummariesQueryInput>;
};


export type QueryTripSummaryArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryTripSummariesArgs = {
  input?: Maybe<TripSummariesQueryInput>;
};


export type QueryProcessVehiclePlanArgs = {
  vehicleUuid?: Maybe<Scalars['UUID']>;
  rmTripUuid?: Maybe<Scalars['UUID']>;
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  describe?: Maybe<Scalars['Boolean']>;
};


export type QueryReportArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryReportsArgs = {
  input?: Maybe<ReportQueryInput>;
};


export type QueryReportFieldsArgs = {
  model?: Maybe<ReportModel>;
};


export type QueryReportMetaArgs = {
  key: Scalars['String'];
};


export type QueryFuelArgs = {
  uuid: Scalars['UUID'];
};


export type QueryFuelsArgs = {
  input: FuelQueryInput;
};


export type QueryGateLogArgs = {
  uuid: Scalars['UUID'];
};


export type QueryGateLogsArgs = {
  input: GateLogQueryInput;
};


export type QueryIncentiveArgs = {
  uuid: Scalars['UUID'];
};


export type QueryIncentivesArgs = {
  input: IncentiveQueryInput;
};


export type QueryIncentiveRateArgs = {
  uuid: Scalars['UUID'];
};


export type QueryIncentiveRatesArgs = {
  input?: Maybe<IncentiveRateQueryInput>;
};


export type QueryIncentiveTypeArgs = {
  uuid: Scalars['UUID'];
};


export type QueryIncentiveTypesArgs = {
  input?: Maybe<IncentiveTypeQueryInput>;
};


export type QueryIncentiveVoucherArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryIncentiveVouchersArgs = {
  input: IncentiveVoucherQueryInput;
};


export type QueryIncentiveVouchersJsonArgs = {
  input?: Maybe<IncentiveVoucherQueryInput>;
};


export type QueryTransportJobArgs = {
  legUuid?: Maybe<Scalars['UUID']>;
};


export type QueryTransportJobsArgs = {
  input: TransportJobQuery;
};


export type QueryTransportJobsJsonArgs = {
  input?: Maybe<TransportJobQuery>;
};


export type QueryLegActivitiesArgs = {
  input: LegActivitiesQuery;
};


export type QueryManifestArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryManifestsArgs = {
  input?: Maybe<QueryManifestsInput>;
};


export type QueryTransportReportJobArgs = {
  jobUuid?: Maybe<Scalars['UUID']>;
};


export type QueryTransportReportJobsArgs = {
  input: TransportReportJobQuery;
};


export type QueryTransportReportJobsJsonArgs = {
  input?: Maybe<TransportReportJobQuery>;
};


export type QueryTransportReportLegActivitiesArgs = {
  input: TransportReportLegActivitiesQuery;
};


export type QueryTransportReportLegActivitiesJsonArgs = {
  input: TransportReportLegActivitiesQuery;
};


export type QueryTransportReportTripArgs = {
  tripUuid?: Maybe<Scalars['UUID']>;
};


export type QueryTransportReportTripsArgs = {
  input: TransportReportTripQuery;
};


export type QueryTransportReportTripsJsonArgs = {
  input?: Maybe<TransportReportTripQuery>;
};


export type QueryShiftArgs = {
  uuid?: Maybe<Scalars['UUID']>;
};


export type QueryShiftsArgs = {
  input: ShiftQueryInput;
};


export type QueryShiftsJsonArgs = {
  input?: Maybe<ShiftQueryInput>;
};


export type QueryTruckLocationArgs = {
  vehicleCode?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  jobUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  tripUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTruckLocationLatestArgs = {
  vehicleCode: Scalars['String'];
};


export type QueryTruckLocationByTripsArgs = {
  jobUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
  tripUuids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTrucksSpeedsArgs = {
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
};


export type QueryReverseGeocodeArgs = {
  input?: Maybe<QueryReverseGeocode>;
};


export type QueryYardArgs = {
  uuid: Scalars['UUID'];
};


export type QueryYardsArgs = {
  input: YardQueryInput;
};

export type QueryAvailabilitiesInput = {
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  types?: Maybe<Array<Maybe<EntityType>>>;
  statuses?: Maybe<Array<Maybe<AvailabilityStatus>>>;
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryEventEtc = {
  uuid?: Maybe<Scalars['UUID']>;
  model?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryEventVoucher = {
  uuid?: Maybe<Scalars['UUID']>;
  model?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryManifestsInput = {
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  statuses?: Maybe<Array<Maybe<ManifestStatus>>>;
};

export type QueryReverseGeocode = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type Quotation = {
  __typename?: 'Quotation';
  uuid?: Maybe<Scalars['UUID']>;
  quotationNo?: Maybe<Scalars['String']>;
  term?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  expiry?: Maybe<Scalars['DateTime']>;
  status?: Maybe<QuotationStatus>;
  buyer?: Maybe<Company>;
  buyerAddress?: Maybe<Address>;
  buyerContact?: Maybe<Contact>;
  seller?: Maybe<Company>;
  sellerAddress?: Maybe<Address>;
  sellerContact?: Maybe<Contact>;
  editBy?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Array<Maybe<QuotationTagTypes>>>;
  quotationItems?: Maybe<Array<Maybe<QuotationItem>>>;
};

export type QuotationItem = {
  __typename?: 'QuotationItem';
  uuid?: Maybe<Scalars['UUID']>;
  quotationUuid?: Maybe<Scalars['UUID']>;
  chargeItem?: Maybe<ChargeItem>;
  description?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  containerType?: Maybe<Scalars['String']>;
  rateType?: Maybe<ChargeRateType>;
  sellCurrency?: Maybe<Currency>;
  sellRate?: Maybe<Scalars['Float']>;
  sellTax?: Maybe<Tax>;
  minChargeAmount?: Maybe<Scalars['Float']>;
  maxChargeAmount?: Maybe<Scalars['Float']>;
  costCurrency?: Maybe<Currency>;
  costRate?: Maybe<Scalars['Float']>;
  costTax?: Maybe<Tax>;
  tags?: Maybe<Array<Maybe<QuotationItemTags>>>;
};

export enum QuotationItemTags {
  IsFcl = 'isFcl',
  IsLcl = 'isLcl',
  IsCon = 'isCon',
  IsDefault = 'isDefault',
  IsPrint = 'isPrint'
}

export type Quotations = {
  __typename?: 'Quotations';
  rows?: Maybe<Array<Maybe<Quotation>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum QuotationStatus {
  Activated = 'activated',
  Deleted = 'deleted'
}

export enum QuotationTagTypes {
  AutoApproveImportCustoms = 'AUTO_APPROVE_IMPORT_CUSTOMS',
  AutoApproveExportCustoms = 'AUTO_APPROVE_EXPORT_CUSTOMS',
  AllowImportCustomsSubmitBeforeInvoice = 'ALLOW_IMPORT_CUSTOMS_SUBMIT_BEFORE_INVOICE',
  BillToConsignee = 'BILL_TO_CONSIGNEE',
  BillToForwarder = 'BILL_TO_FORWARDER',
  ServiceTypeHaulage = 'SERVICE_TYPE_HAULAGE',
  ServiceTypeFreightforwarding = 'SERVICE_TYPE_FREIGHTFORWARDING',
  ServiceTypeTransport = 'SERVICE_TYPE_TRANSPORT',
  ServiceTypeForwarding = 'SERVICE_TYPE_FORWARDING'
}

export type Rate = {
  __typename?: 'Rate';
  name?: Maybe<Scalars['String']>;
};

export type RecomputeLegActivitiesQuery = {
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type RemoveDriverCompanyInput = {
  uuid?: Maybe<Scalars['UUID']>;
  companyType?: Maybe<EntityCompanyUpdateType>;
  companyUuid?: Maybe<Scalars['UUID']>;
};

export type RemoveManifestLegsInput = {
  manifestUuid?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['UUID']>;
};

export type RemoveTrailerCompanyInput = {
  uuid?: Maybe<Scalars['UUID']>;
  companyType?: Maybe<EntityCompanyUpdateType>;
  companyUuid?: Maybe<Scalars['UUID']>;
};

export type RemoveVehicleCompanyInput = {
  uuid?: Maybe<Scalars['UUID']>;
  companyType?: Maybe<EntityCompanyUpdateType>;
  companyUuid?: Maybe<Scalars['UUID']>;
};

export type Report = {
  __typename?: 'Report';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  model?: Maybe<ReportModel>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<ReportStatus>;
  categories?: Maybe<Array<Maybe<ReportCategories>>>;
  sorts?: Maybe<Array<Maybe<Scalars['String']>>>;
  columns?: Maybe<Array<Maybe<ReportColumn>>>;
  data?: Maybe<Scalars['JSON']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  portalCompanies?: Maybe<Array<Maybe<PortalCompany>>>;
};

export enum ReportAggregationType {
  First = 'first',
  Sum = 'sum',
  Avg = 'avg',
  Min = 'min',
  Max = 'max'
}

export enum ReportCategories {
  Operation = 'operation',
  Management = 'management',
  Finance = 'finance'
}

export type ReportColumn = {
  __typename?: 'ReportColumn';
  key?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  formatFnc?: Maybe<Array<Maybe<ReportFormatFnc>>>;
  formatParams?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

export type ReportColumnInput = {
  key?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  formatFnc?: Maybe<Array<Maybe<ReportFormatFnc>>>;
  formatParams?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

export type ReportField = {
  __typename?: 'ReportField';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ReportFieldsInput = {
  key?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  aggregationLayer?: Maybe<Scalars['Int']>;
  aggregation?: Maybe<ReportAggregationType>;
  formatFnc?: Maybe<Array<Maybe<ReportFormatFnc>>>;
  formatParams?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

export type ReportFilter = {
  __typename?: 'ReportFilter';
  key?: Maybe<Scalars['String']>;
  ctrlType?: Maybe<Scalars['String']>;
  dataType?: Maybe<Scalars['String']>;
  defaultValues?: Maybe<Scalars['JSON']>;
  defaultShow?: Maybe<Scalars['Boolean']>;
  isArray?: Maybe<Scalars['Boolean']>;
};

export enum ReportFormatFnc {
  DateFormat = 'dateFormat',
  DateDiff = 'dateDiff'
}

export type ReportJobSummaries = {
  __typename?: 'ReportJobSummaries';
  rows?: Maybe<Array<Maybe<ReportJobSummary>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type ReportJobSummariesQueryInput = {
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ReportJobSummary = {
  __typename?: 'ReportJobSummary';
  _id?: Maybe<Scalars['UUID']>;
  uuid?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
  bcUuid?: Maybe<Scalars['UUID']>;
  depts?: Maybe<Array<Maybe<ReportJobSummaryDept>>>;
  zones?: Maybe<Array<Maybe<ReportJobSummaryZone>>>;
  pmUtil?: Maybe<Array<Maybe<PmUtilDept>>>;
  drUtil?: Maybe<Array<Maybe<DriverUtilDept>>>;
  ts?: Maybe<Scalars['DateTime']>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  updateTimeMins?: Maybe<UpdateTimeMins>;
  driverUpdatePct?: Maybe<DriverAppUpdateCount>;
};

export type ReportJobSummaryDept = {
  __typename?: 'ReportJobSummaryDept';
  dept?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  sell?: Maybe<Scalars['Float']>;
  trips?: Maybe<Scalars['JSON']>;
  teu?: Maybe<Scalars['Int']>;
};

export type ReportJobSummaryZone = {
  __typename?: 'ReportJobSummaryZone';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  sell?: Maybe<Scalars['Float']>;
  trips?: Maybe<Scalars['JSON']>;
  teu?: Maybe<Scalars['Int']>;
};

export type ReportMeta = {
  __typename?: 'ReportMeta';
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<ReportCategories>>>;
  sorts?: Maybe<Array<Maybe<Scalars['String']>>>;
  columns?: Maybe<Array<Maybe<ReportColumn>>>;
  filters?: Maybe<Array<Maybe<ReportFilter>>>;
};

export enum ReportModel {
  TransportJob = 'TransportJob',
  Booking = 'Booking',
  Job = 'Job',
  CostItem = 'CostItem',
  Voucher = 'Voucher',
  VoucherItem = 'VoucherItem'
}

export type ReportPortalCompany = {
  __typename?: 'ReportPortalCompany';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  reportUuid?: Maybe<Scalars['UUID']>;
  portalCompanyUuid?: Maybe<Scalars['UUID']>;
  report?: Maybe<Report>;
  hours?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ReportQueryInput = {
  q?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<ReportCategories>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Reports = {
  __typename?: 'Reports';
  rows?: Maybe<Array<Maybe<Report>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum ReportStatus {
  Activated = 'activated',
  Deleted = 'deleted'
}

export type ReportSummary = {
  __typename?: 'ReportSummary';
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<ReportCategories>>>;
};

export type Request = {
  __typename?: 'Request';
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<User>;
  remarks?: Maybe<Scalars['String']>;
  meta?: Maybe<RequestMetaType>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type RequestBookingDocument = {
  type?: Maybe<Scalars['String']>;
  softCopy?: Maybe<Scalars['Boolean']>;
  hardCopy?: Maybe<Scalars['Boolean']>;
};

export type RequestDocumentTypesInput = {
  types?: Maybe<Array<Maybe<RequestBookingDocument>>>;
};

export type RequestEmailResultsType = {
  __typename?: 'RequestEmailResultsType';
  recipient?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  logLevel?: Maybe<Scalars['String']>;
};

export type RequestMetaType = {
  __typename?: 'RequestMetaType';
  jobs?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  attachments?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};

export type RequestTemplate = {
  __typename?: 'RequestTemplate';
  type?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  vendorType?: Maybe<Scalars['String']>;
};

export enum RequestType {
  ExpRequestBookingConfirmationFromLiner = 'ExpRequestBookingConfirmationFromLiner',
  ExpRequestBookingConfirmationReeferFromLiner = 'ExpRequestBookingConfirmationReeferFromLiner',
  ExpCompOutstandingSupplierPaymentNotification = 'ExpCompOutstandingSupplierPaymentNotification',
  ExpCustShipperDraftNotification = 'ExpCustShipperDraftNotification',
  ExpCustShipperDraftNotificationAutoApprove = 'ExpCustShipperDraftNotificationAutoApprove',
  ExpHlgRequestForCollection = 'ExpHlgRequestForCollection',
  ExpHlgRequestOfTransport = 'ExpHlgRequestOfTransport',
  ExpHlgRequestOfTransportAttachments = 'ExpHlgRequestOfTransportAttachments',
  ExpLinerContainerMovementOrder = 'ExpLinerContainerMovementOrder',
  ExpLinerShippingInstructions = 'ExpLinerShippingInstructions',
  ExpBillOfLadingDraftShipperConfirmationRequest = 'ExpBillOfLadingDraftShipperConfirmationRequest',
  ExpLinerNotifyForeignAgentOfWaybill = 'ExpLinerNotifyForeignAgentOfWaybill',
  ExpLinerLinerPaymentNotify = 'ExpLinerLinerPaymentNotify',
  ExpShipperCustomsDocumentDraftNotiRequest = 'ExpShipperCustomsDocumentDraftNotiRequest',
  ExpLinerBookingConfirmationCustomerRequest = 'ExpLinerBookingConfirmationCustomerRequest',
  ExpBillOfLadingDraftLinerConfirmationRequest = 'ExpBillOfLadingDraftLinerConfirmationRequest',
  ExpLinerPendNotifyForeignAgentOfWaybill = 'ExpLinerPendNotifyForeignAgentOfWaybill',
  ExpLinerNotifyCustomerComplete = 'ExpLinerNotifyCustomerComplete',
  ExpHlgContainerMovementOrder = 'ExpHlgContainerMovementOrder',
  ImpCompOutstandingSupplierPaymentNotification = 'ImpCompOutstandingSupplierPaymentNotification',
  ImpCustConsigneeDraftNotification = 'ImpCustConsigneeDraftNotification',
  ImpCustConsigneeDraftNotificationAutoApprove = 'ImpCustConsigneeDraftNotificationAutoApprove',
  ImpCustConsigneeCustomsPaymentCashNotification = 'ImpCustConsigneeCustomsPaymentCashNotification',
  ImpEdoRequisition = 'ImpEdoRequisition',
  ImpHlgRequestForCollection = 'ImpHlgRequestForCollection',
  ImpHlgRequestOfTransport = 'ImpHlgRequestOfTransport',
  ImpHlgRequestOfTransportExtraDocs = 'ImpHlgRequestOfTransportExtraDocs',
  ImpNoaRequisition = 'ImpNoaRequisition',
  ImpLoiContainerDepositRequisition = 'ImpLoiContainerDepositRequisition',
  ImpFreightNoaExternalForwarderNotice = 'ImpFreightNoaExternalForwarderNotice',
  ImpFreightEdoExternalForwarderNotice = 'ImpFreightEdoExternalForwarderNotice',
  ImpNoaHouseRequisition = 'ImpNoaHouseRequisition',
  RequestExportDocuments = 'RequestExportDocuments',
  RequestImportDocuments = 'RequestImportDocuments'
}

export type RequisitionTemplate = {
  __typename?: 'RequisitionTemplate';
  uuid: Scalars['UUID'];
  type?: Maybe<RequestType>;
  to?: Maybe<Array<Maybe<Scalars['String']>>>;
  cc?: Maybe<Array<Maybe<Scalars['String']>>>;
  bcc?: Maybe<Array<Maybe<Scalars['String']>>>;
  template?: Maybe<Scalars['String']>;
  fields?: Maybe<EmailRequestFields>;
};

export type Response = {
  __typename?: 'Response';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type ReverseGeoAddress = {
  __typename?: 'ReverseGeoAddress';
  label?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<RoleStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  editBy?: Maybe<User>;
  editByUuid?: Maybe<Scalars['UUID']>;
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
};

export type Roles = {
  __typename?: 'Roles';
  rows?: Maybe<Array<Maybe<Role>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type RolesQuery = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<RoleStatus>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  noTags?: Maybe<Scalars['Boolean']>;
};

export enum RoleStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED'
}

export enum RoleTag {
  PortalAdmin = 'portalAdmin',
  PortalUser = 'portalUser'
}

export enum RuleCondition {
  And = 'AND',
  Or = 'OR'
}

export type SeaPath = {
  __typename?: 'SeaPath';
  fromPort?: Maybe<Scalars['String']>;
  toPort?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  distanceSeca?: Maybe<Scalars['Int']>;
  waypoint?: Maybe<Array<Maybe<Waypoint>>>;
};

export type Seaport = {
  __typename?: 'Seaport';
  portsDbId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameCaps?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  alternativeName?: Maybe<Scalars['String']>;
  alternativeNameCaps?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  unlocode?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  dayLightSavings?: Maybe<Scalars['String']>;
};

export type Search = {
  __typename?: 'Search';
  hits?: Maybe<Array<Maybe<SearchResult>>>;
  page?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  params?: Maybe<Scalars['String']>;
};

export type SearchConsolVouchersInput = {
  type?: Maybe<Array<Maybe<ConsolVoucherType>>>;
  status?: Maybe<Array<Maybe<ConsolVoucherStatus>>>;
  issueDate?: Maybe<SearchConsolVouchersIssueDateInput>;
  reference?: Maybe<Scalars['String']>;
};

export type SearchConsolVouchersIssueDateInput = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

export type SearchInput = {
  index?: Maybe<Scalars['String']>;
  q?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['String']>;
};

export type SearchResult = Booking | Voucher;

export type SearchVouchersInput = {
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  paymentType?: Maybe<Array<Maybe<PaymentType>>>;
  status?: Maybe<Array<Maybe<VoucherStatus>>>;
  vendor?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  customer?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  invoiceNumber?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  accountDate?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  dueDate?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type SeaRoute = {
  __typename?: 'SeaRoute';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  dayLimit?: Maybe<Scalars['Int']>;
  todayUsed?: Maybe<Scalars['Int']>;
  crossSeca?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  totalDistance?: Maybe<Scalars['Float']>;
  totalSecaDistance?: Maybe<Scalars['Int']>;
  section?: Maybe<Array<Maybe<SeaPath>>>;
};

export type Service = {
  __typename?: 'Service';
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
};

export type ServiceInput = {
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  companyUuid?: Maybe<Scalars['UUID']>;
};

export type Setting = {
  __typename?: 'Setting';
  value?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SettingInput = {
  value?: Maybe<Scalars['String']>;
  type?: Maybe<CounterType>;
};

export type Shift = {
  __typename?: 'Shift';
  _id?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  driver?: Maybe<Driver>;
  vehicle?: Maybe<Vehicle>;
  incentives?: Maybe<Array<Maybe<Incentive>>>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  no?: Maybe<Scalars['String']>;
  status?: Maybe<ShiftStatus>;
  approvedBy?: Maybe<User>;
  approvedUuid?: Maybe<Scalars['UUID']>;
  approvedAt?: Maybe<Scalars['DateTime']>;
  approvedFinanceBy?: Maybe<User>;
  approvedFinanceUuid?: Maybe<Scalars['UUID']>;
  approvedFinanceAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<User>;
  updatedUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  createdUuid?: Maybe<Scalars['UUID']>;
  breaks?: Maybe<Array<Maybe<ShiftBreak>>>;
  remarks?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  duration?: Maybe<Scalars['Int']>;
  breakDuration?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Float']>;
  incentiveTypeUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  incentiveTypeSum?: Maybe<Array<Maybe<IncentiveTypeSum>>>;
  incentiveCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  incentiveCategorySum?: Maybe<Array<Maybe<IncentiveCategorySum>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  tripUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};

export type ShiftBreak = {
  __typename?: 'ShiftBreak';
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  remarks?: Maybe<Scalars['String']>;
};

export type ShiftBreakInput = {
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  remarks?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ShiftQueryInput = {
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  startStart?: Maybe<Scalars['DateTime']>;
  startEnd?: Maybe<Scalars['DateTime']>;
  financeApproveStart?: Maybe<Scalars['DateTime']>;
  financeApproveEnd?: Maybe<Scalars['DateTime']>;
  _ids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  statuses?: Maybe<Array<Maybe<ShiftStatus>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  tripUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  incentiveTypeUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  incentiveCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  nos?: Maybe<Array<Maybe<Scalars['String']>>>;
  q?: Maybe<Scalars['String']>;
  jsonQueryOptions?: Maybe<Array<Maybe<ShiftQueryOptions>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum ShiftQueryOptions {
  TransportJobs = 'transportJobs',
  Drivers = 'drivers',
  Vehicles = 'vehicles',
  Users = 'users',
  IncentiveTypes = 'incentiveTypes',
  Incentives = 'incentives'
}

export type Shifts = {
  __typename?: 'Shifts';
  rows?: Maybe<Array<Maybe<Shift>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum ShiftStatus {
  Open = 'OPEN',
  Closed = 'CLOSED',
  Approved = 'APPROVED',
  Approvedfinance = 'APPROVEDFINANCE',
  Cancelled = 'CANCELLED'
}

export enum ShipmentTypeInput {
  Fcl = 'FCL',
  Lcl = 'LCL',
  Air = 'AIR',
  Sc = 'SC',
  Transport = 'TRANSPORT'
}

export type ShippingRate = {
  __typename?: 'ShippingRate';
  route?: Maybe<Scalars['String']>;
  days?: Maybe<Scalars['String']>;
  liner?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  effective?: Maybe<Scalars['String']>;
  expiry?: Maybe<Scalars['String']>;
  gp20?: Maybe<SRate>;
  gp40?: Maybe<SRate>;
  hc40?: Maybe<SRate>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ShippingRates = {
  __typename?: 'ShippingRates';
  rows?: Maybe<Array<Maybe<ShippingRate>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type ShippingRateType = {
  __typename?: 'ShippingRateType';
  twentyContainer?: Maybe<Scalars['Int']>;
  fourtyContainer?: Maybe<Scalars['Int']>;
  fourtyHCContainer?: Maybe<Scalars['Int']>;
  fourtyFiveHCContainer?: Maybe<Scalars['Int']>;
  volume?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type SRate = {
  __typename?: 'SRate';
  currency?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type SubmitRotInput = {
  bookingUuid: Scalars['UUID'];
  deliveryHour?: Maybe<Scalars['String']>;
  customerRef?: Maybe<Scalars['String']>;
  customerRef2?: Maybe<Scalars['String']>;
  haulierUuid?: Maybe<Scalars['UUID']>;
  billToUuid?: Maybe<Scalars['UUID']>;
  pickupCompanyUuid?: Maybe<Scalars['UUID']>;
  pickupAddressUuid?: Maybe<Scalars['UUID']>;
  deliveryAddressUuid?: Maybe<Scalars['UUID']>;
  dropoffCompanyUuid?: Maybe<Scalars['UUID']>;
  dropoffAddressUuid?: Maybe<Scalars['UUID']>;
  remarks?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobs?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};

export type SuperAdmins = {
  __typename?: 'SuperAdmins';
  rows?: Maybe<Array<Maybe<User>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type Tax = {
  __typename?: 'Tax';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  percentage?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Boolean']>;
  exemptionDocumentUuid?: Maybe<Scalars['UUID']>;
};

export type Taxes = {
  __typename?: 'Taxes';
  rows?: Maybe<Array<Maybe<Tax>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type Template = {
  __typename?: 'Template';
  content: Scalars['String'];
};

export enum TemplateResource {
  Voucher = 'voucher',
  Request = 'request',
  BookingDocument = 'bookingDocument'
}

export type Trailer = {
  __typename?: 'Trailer';
  uuid?: Maybe<Scalars['UUID']>;
  image?: Maybe<Attachment>;
  documents?: Maybe<Array<Maybe<DocumentDescription>>>;
  registration?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  department?: Maybe<Array<Maybe<Scalars['String']>>>;
  make?: Maybe<Scalars['String']>;
  loadCapacity?: Maybe<Scalars['Int']>;
  registrationYear?: Maybe<Scalars['Int']>;
  manufactureYear?: Maybe<Scalars['Int']>;
  trailerType?: Maybe<Scalars['String']>;
  tareWeight?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<TrailerStatus>;
  ownerType?: Maybe<TrailerOwnerType>;
  companies?: Maybe<Array<Maybe<EntityCompany>>>;
  customers?: Maybe<Array<Maybe<EntityCompany>>>;
  subContractors?: Maybe<Array<Maybe<EntityCompany>>>;
  customerAddress?: Maybe<Array<Maybe<EntityCompanyAddress>>>;
  entityException?: Maybe<EntityExceptionOutcome>;
};

export enum TrailerOwnerType {
  Owned = 'OWNED',
  Intercompany = 'INTERCOMPANY',
  Interbranch = 'INTERBRANCH',
  Outsource = 'OUTSOURCE'
}

export type TrailersResults = {
  __typename?: 'TrailersResults';
  rows?: Maybe<Array<Maybe<Trailer>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum TrailerStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Service = 'SERVICE',
  Sold = 'SOLD',
  Deleted = 'DELETED'
}

export enum TransactionType {
  Accpay = 'ACCPAY',
  Accrec = 'ACCREC'
}

export type Transport = {
  __typename?: 'Transport';
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
};

export type TransportActivity = {
  __typename?: 'TransportActivity';
  code?: Maybe<Scalars['String']>;
  type?: Maybe<TransportActivityType>;
  name?: Maybe<Scalars['String']>;
  short?: Maybe<Scalars['String']>;
  compile?: Maybe<Scalars['String']>;
  ts?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  driverNick?: Maybe<Scalars['String']>;
  driverCode?: Maybe<Scalars['String']>;
  driverEntity?: Maybe<Driver>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  vehicleNick?: Maybe<Scalars['String']>;
  vehicleCode?: Maybe<Scalars['String']>;
  vehicleDepartments?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleEntity?: Maybe<Vehicle>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  trailerNick?: Maybe<Scalars['String']>;
  trailerCode?: Maybe<Scalars['String']>;
  trailerEntity?: Maybe<Trailer>;
  remarks?: Maybe<Scalars['String']>;
};

export type TransportActivityFlow = {
  __typename?: 'TransportActivityFlow';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short?: Maybe<Scalars['String']>;
  compile?: Maybe<Scalars['String']>;
  next?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipXTrigger?: Maybe<TransportActivityShipXTrigger>;
};

export type TransportActivityShipXTrigger = {
  __typename?: 'TransportActivityShipXTrigger';
  type?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export enum TransportActivityType {
  Created = 'created',
  PlanStart = 'planStart',
  Start = 'start',
  StartOut = 'startOut',
  PlanEnd = 'planEnd',
  End = 'end',
  EndOut = 'endOut'
}

export enum TransportActivityVerb {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export type TransportAreaCode = {
  __typename?: 'TransportAreaCode';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  location?: Maybe<Geometry>;
  locationPolygon?: Maybe<GeometryPolygon>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TransportAreaCodes = {
  __typename?: 'TransportAreaCodes';
  rows?: Maybe<Array<Maybe<TransportAreaCode>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum TransportDocumentType {
  SeaWaybill = 'SEA_WAYBILL',
  OrderBl = 'ORDER_BL',
  NominateBl = 'NOMINATE_BL',
  BearerBl = 'BEARER_BL'
}

export type TransportInput = {
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  companyUuid?: Maybe<Scalars['UUID']>;
};

export type TransportJob = {
  __typename?: 'TransportJob';
  _id?: Maybe<Scalars['UUID']>;
  uuid?: Maybe<Scalars['String']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['UUID']>;
  manifestUuid?: Maybe<Scalars['UUID']>;
  shipperCode?: Maybe<Scalars['String']>;
  shipperName?: Maybe<Scalars['String']>;
  shipperUuid?: Maybe<Scalars['UUID']>;
  shipperAddress?: Maybe<Address>;
  consigneeCode?: Maybe<Scalars['String']>;
  consigneeName?: Maybe<Scalars['String']>;
  consigneeUuid?: Maybe<Scalars['UUID']>;
  consigneeAddress?: Maybe<Address>;
  billToCode?: Maybe<Scalars['String']>;
  billToName?: Maybe<Scalars['String']>;
  billToUuid?: Maybe<Scalars['UUID']>;
  billToSource?: Maybe<TransportSource>;
  fromCompanyUuid?: Maybe<Scalars['UUID']>;
  fromAddressUuid?: Maybe<Scalars['UUID']>;
  from?: Maybe<Scalars['JSON']>;
  toCompanyUuid?: Maybe<Scalars['UUID']>;
  toAddressUuid?: Maybe<Scalars['UUID']>;
  to?: Maybe<Scalars['JSON']>;
  address?: Maybe<Scalars['JSON']>;
  bookingType?: Maybe<Scalars['String']>;
  jobType?: Maybe<Scalars['String']>;
  tripType?: Maybe<Scalars['String']>;
  tripSequence?: Maybe<Scalars['Int']>;
  tripRemarks?: Maybe<Scalars['String']>;
  tripReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  tripSeal?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  sequenceTotal?: Maybe<Scalars['Int']>;
  bookingStatus?: Maybe<BookingStatus>;
  jobStatus?: Maybe<JobStatus>;
  tripStatus?: Maybe<TripStatus>;
  legStatus?: Maybe<LegStatus>;
  dept?: Maybe<Scalars['String']>;
  shipDept?: Maybe<Scalars['String']>;
  conDept?: Maybe<Scalars['String']>;
  billToDept?: Maybe<Scalars['String']>;
  no?: Maybe<Scalars['String']>;
  jobNo?: Maybe<Scalars['String']>;
  bookingDetails?: Maybe<Scalars['JSON']>;
  bookingNo?: Maybe<Scalars['String']>;
  bookingDepts?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookingTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  customsDocNo?: Maybe<Scalars['String']>;
  shipperRef?: Maybe<Scalars['String']>;
  consigneeRef?: Maybe<Scalars['String']>;
  bl?: Maybe<Scalars['String']>;
  houseBl?: Maybe<Scalars['String']>;
  shipmentType?: Maybe<ShipmentTypeInput>;
  shippingRef?: Maybe<Scalars['String']>;
  saBookingNo?: Maybe<Scalars['String']>;
  internalRef?: Maybe<Scalars['String']>;
  scn?: Maybe<Scalars['String']>;
  seal?: Maybe<Scalars['String']>;
  commodities?: Maybe<Array<Maybe<Scalars['String']>>>;
  containerType?: Maybe<Scalars['String']>;
  transportType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  uom?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  weightUnit?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
  volumeUnit?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  containerGrade?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  shipperRequiredDate?: Maybe<Scalars['DateTime']>;
  consigneeRequiredDate?: Maybe<Scalars['DateTime']>;
  shipOutDate?: Maybe<Scalars['DateTime']>;
  planStart?: Maybe<Scalars['DateTime']>;
  start?: Maybe<Scalars['DateTime']>;
  startOut?: Maybe<Scalars['DateTime']>;
  planEnd?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  endOut?: Maybe<Scalars['DateTime']>;
  firstTs?: Maybe<Scalars['DateTime']>;
  lastTs?: Maybe<Scalars['DateTime']>;
  vFirstTs?: Maybe<Scalars['String']>;
  vLastTs?: Maybe<Scalars['String']>;
  dFirstTs?: Maybe<Scalars['String']>;
  dLastTs?: Maybe<Scalars['String']>;
  tLastTs?: Maybe<Scalars['String']>;
  driverCode?: Maybe<Scalars['String']>;
  driverName?: Maybe<Scalars['String']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  driverEntity?: Maybe<Driver>;
  vehicleCode?: Maybe<Scalars['String']>;
  vehicleName?: Maybe<Scalars['String']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  vehicleDepartments?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleEntity?: Maybe<Vehicle>;
  trailerCode?: Maybe<Scalars['String']>;
  trailerName?: Maybe<Scalars['String']>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  trailerEntity?: Maybe<Trailer>;
  type?: Maybe<LegType>;
  transportUuid?: Maybe<Scalars['UUID']>;
  transportName?: Maybe<Scalars['String']>;
  transportSource?: Maybe<TransportSource>;
  remarks?: Maybe<Scalars['String']>;
  incentiveVouchers?: Maybe<Array<Maybe<IncentiveVoucher>>>;
  booking?: Maybe<Booking>;
};

export type TransportJobQuery = {
  bookingStatuses?: Maybe<Array<Maybe<BookingStatus>>>;
  jobStatuses?: Maybe<Array<Maybe<JobStatus>>>;
  tripStatuses?: Maybe<Array<Maybe<TripStatus>>>;
  legStatuses?: Maybe<Array<Maybe<LegStatus>>>;
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  billToUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  shipperUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  consigneeUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  _tags?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  fromZones?: Maybe<Array<Maybe<Scalars['String']>>>;
  toZones?: Maybe<Array<Maybe<Scalars['String']>>>;
  fromCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  toCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  transportType?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookingDepts?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookingTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vehicleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  driverCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  transportSources?: Maybe<Array<Maybe<TransportSource>>>;
  billToSources?: Maybe<Array<Maybe<TransportSource>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  tripUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  bookingTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  tripTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipperRequiredDateStart?: Maybe<Scalars['DateTime']>;
  shipperRequiredDateEnd?: Maybe<Scalars['DateTime']>;
  shipOutStartDate?: Maybe<Scalars['DateTime']>;
  shipOutEndDate?: Maybe<Scalars['DateTime']>;
  activityStartDate?: Maybe<Scalars['DateTime']>;
  activityEndDate?: Maybe<Scalars['DateTime']>;
  q?: Maybe<Scalars['String']>;
  secondaryPreferred?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  jsonQueryOptions?: Maybe<Array<Maybe<TransportJobQueryOptions>>>;
  isSearchAllFields?: Maybe<Scalars['Boolean']>;
  isSearchCaseSensitive?: Maybe<Scalars['Boolean']>;
};

export enum TransportJobQueryOptions {
  IncentiveVouchers = 'incentiveVouchers',
  VoucherItems = 'voucherItems',
  Drivers = 'drivers',
  Vehicles = 'vehicles',
  Trailers = 'trailers'
}

export type TransportJobs = {
  __typename?: 'TransportJobs';
  rows?: Maybe<Array<Maybe<TransportJob>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type TransportJobType = {
  __typename?: 'TransportJobType';
  code?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  baseCompanyUuid?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type TransportJobTypes = {
  __typename?: 'TransportJobTypes';
  rows?: Maybe<Array<Maybe<TransportJobType>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum TransportJobTypeStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}

export type TransportQueueRunnerInput = {
  key?: Maybe<Scalars['String']>;
  queueName?: Maybe<Scalars['String']>;
  queueContent?: Maybe<Scalars['JSON']>;
};

export type TransportRate = {
  __typename?: 'TransportRate';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Int']>;
  rates?: Maybe<Array<Maybe<TransportRateDetails>>>;
  vendor?: Maybe<Company>;
  customer?: Maybe<Company>;
};

export enum TransportRateCargoTypes {
  Dg1 = 'DG1',
  Dg2 = 'DG2',
  Dg3 = 'DG3',
  Fr = 'FR',
  Gp = 'GP',
  Hq = 'HQ',
  Ht = 'HT',
  Ol = 'OL',
  Ot = 'OT',
  Rf = 'RF',
  Tk = 'TK',
  Up = 'UP'
}

export type TransportRateDetails = {
  __typename?: 'TransportRateDetails';
  transactionType?: Maybe<TransportRateTransactionType>;
  cargoType?: Maybe<TransportRateCargoTypes>;
  transportType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  rateType?: Maybe<ChargeRateType>;
  rateUom?: Maybe<Scalars['String']>;
  rateRule?: Maybe<ChargeRateRuleType>;
  rateValue?: Maybe<Scalars['Float']>;
};

export enum TransportRateDetailsType {
  Divert = 'DIVERT',
  Faf = 'FAF',
  Haul = 'HAUL',
  Trip = 'TRIP',
  Rebate = 'REBATE',
  Stag = 'STAG',
  Toll = 'TOLL'
}

export type TransportRateOptions = {
  transactionType: TransportRateTransactionType;
  type: Scalars['String'];
  cargoType?: Maybe<TransportRateCargoTypes>;
  rateType?: Maybe<ChargeRateType>;
  rateUom?: Maybe<Scalars['String']>;
  rateRule?: Maybe<ChargeRateRuleType>;
  rateValue?: Maybe<Scalars['Float']>;
};

export type TransportRates = {
  __typename?: 'TransportRates';
  rows?: Maybe<Array<Maybe<TransportRate>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type TransportRateSelector = {
  type: Scalars['String'];
  from: Scalars['String'];
  to: Scalars['String'];
  vendorUuid?: Maybe<Scalars['UUID']>;
  customerUuid?: Maybe<Scalars['UUID']>;
};

export enum TransportRateTransactionType {
  Sell = 'SELL',
  Cost = 'COST'
}

export type TransportReportJob = {
  __typename?: 'TransportReportJob';
  _id?: Maybe<Scalars['UUID']>;
  uuid?: Maybe<Scalars['UUID']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  bookingType?: Maybe<Scalars['String']>;
  shipperName?: Maybe<Scalars['String']>;
  shipperUuid?: Maybe<Scalars['UUID']>;
  shipperAddress?: Maybe<Address>;
  shipperAddressCache?: Maybe<Scalars['JSON']>;
  consigneeName?: Maybe<Scalars['String']>;
  consigneeUuid?: Maybe<Scalars['UUID']>;
  consigneeAddress?: Maybe<Address>;
  consigneeAddressCache?: Maybe<Scalars['JSON']>;
  billToCode?: Maybe<Scalars['String']>;
  billToName?: Maybe<Scalars['String']>;
  billToUuid?: Maybe<Scalars['UUID']>;
  billToAccount?: Maybe<Scalars['UUID']>;
  billToSource?: Maybe<TransportSource>;
  bookingDetails?: Maybe<Scalars['JSON']>;
  bookingNo?: Maybe<Scalars['String']>;
  bookingDepts?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookingTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  customsDocNo?: Maybe<Scalars['String']>;
  shipperRef?: Maybe<Scalars['String']>;
  consigneeRef?: Maybe<Scalars['String']>;
  bl?: Maybe<Scalars['String']>;
  houseBl?: Maybe<Scalars['String']>;
  shipmentType?: Maybe<ShipmentTypeInput>;
  shippingRef?: Maybe<Scalars['String']>;
  saBookingNo?: Maybe<Scalars['String']>;
  internalRef?: Maybe<Scalars['String']>;
  scn?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  bookingStatus?: Maybe<BookingStatus>;
  no?: Maybe<Scalars['String']>;
  jobNo?: Maybe<Scalars['String']>;
  containerType?: Maybe<Scalars['String']>;
  transportType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  uom?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  weightUnit?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
  volumeUnit?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  dept?: Maybe<Scalars['String']>;
  commodities?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipperRequiredDate?: Maybe<Scalars['DateTime']>;
  consigneeRequiredDate?: Maybe<Scalars['DateTime']>;
  jobStatus?: Maybe<JobStatus>;
  jobType?: Maybe<Scalars['String']>;
  tripsTimings?: Maybe<Array<Maybe<TripTimings>>>;
  legStatuses?: Maybe<Array<Maybe<LegStatus>>>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  driverNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  driverCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  driverEntities?: Maybe<Array<Maybe<Driver>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vehicleNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleDepts?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleEntities?: Maybe<Array<Maybe<Vehicle>>>;
  trailerUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  trailerNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailerCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailerEntities?: Maybe<Array<Maybe<Trailer>>>;
  estimatedDistanceKm?: Maybe<Scalars['Int']>;
  actualDistanceKm?: Maybe<Scalars['Int']>;
  estimatedTravelTimeMins?: Maybe<Scalars['Int']>;
  actualTravelTimeMins?: Maybe<Scalars['Int']>;
  transportUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  transportNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  transportSources?: Maybe<Array<Maybe<TransportSource>>>;
  remarks?: Maybe<Array<Maybe<Scalars['String']>>>;
  transportJobs?: Maybe<Array<Maybe<TransportJob>>>;
  incentiveVoucherNos?: Maybe<Array<Maybe<Scalars['String']>>>;
  incentiveVoucherDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  incentiveVoucherTotal?: Maybe<Scalars['Float']>;
  incentiveVoucherStatuses?: Maybe<Array<Maybe<Scalars['String']>>>;
  incentiveVoucherUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  incentiveVouchers?: Maybe<Array<Maybe<IncentiveVoucher>>>;
  shiftNos?: Maybe<Array<Maybe<Scalars['String']>>>;
  shiftUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  shifts?: Maybe<Array<Maybe<Shift>>>;
  costItemLocalCurrency?: Maybe<Scalars['String']>;
  costItemCostCurrencies?: Maybe<Array<Maybe<Scalars['String']>>>;
  costItemCostTotal?: Maybe<Scalars['Float']>;
  costItemCostLocalTotal?: Maybe<Scalars['Float']>;
  costItemSellCurrencies?: Maybe<Array<Maybe<Scalars['String']>>>;
  costItemSellTotal?: Maybe<Scalars['Float']>;
  costItemSellLocalTotal?: Maybe<Scalars['Float']>;
  costItemARTotal?: Maybe<Scalars['Float']>;
  costItemARDraftTotal?: Maybe<Scalars['Float']>;
  costItemAPTotal?: Maybe<Scalars['Float']>;
  costItemAPDraftTotal?: Maybe<Scalars['Float']>;
  voucherNos?: Maybe<Array<Maybe<Scalars['String']>>>;
  voucherAccountDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  voucherIssueDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  voucherArTotal?: Maybe<Scalars['Float']>;
  voucherArLocalTotal?: Maybe<Scalars['Float']>;
  voucherApTotal?: Maybe<Scalars['Float']>;
  voucherApLocalTotal?: Maybe<Scalars['Float']>;
  voucherCurrencies?: Maybe<Array<Maybe<Scalars['String']>>>;
  voucherLocalCurrency?: Maybe<Scalars['String']>;
  voucherStatuses?: Maybe<Array<Maybe<Scalars['String']>>>;
  voucherUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vouchers?: Maybe<Array<Maybe<Voucher>>>;
  booking?: Maybe<Booking>;
};

export type TransportReportJobQuery = {
  bookingStatuses?: Maybe<Array<Maybe<BookingStatus>>>;
  jobStatuses?: Maybe<Array<Maybe<JobStatus>>>;
  tripStatuses?: Maybe<Array<Maybe<TripStatus>>>;
  legStatuses?: Maybe<Array<Maybe<LegStatus>>>;
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  billToUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  shipperUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  consigneeUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  fromZones?: Maybe<Array<Maybe<Scalars['String']>>>;
  toZones?: Maybe<Array<Maybe<Scalars['String']>>>;
  fromCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  toCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  transportType?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  transportUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  transportNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  transportSources?: Maybe<Array<Maybe<TransportSource>>>;
  billToSources?: Maybe<Array<Maybe<TransportSource>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  tripUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  bookingTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  tripTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipperRequiredDateStart?: Maybe<Scalars['DateTime']>;
  shipperRequiredDateEnd?: Maybe<Scalars['DateTime']>;
  shipOutStartDate?: Maybe<Scalars['DateTime']>;
  shipOutEndDate?: Maybe<Scalars['DateTime']>;
  activityStartDate?: Maybe<Scalars['DateTime']>;
  activityEndDate?: Maybe<Scalars['DateTime']>;
  q?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  jsonQueryOptions?: Maybe<Array<Maybe<TransportJobQueryOptions>>>;
  includeIncentives?: Maybe<Scalars['Boolean']>;
};

export type TransportReportJobs = {
  __typename?: 'TransportReportJobs';
  rows?: Maybe<Array<Maybe<TransportReportJob>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type TransportReportLegActivities = {
  __typename?: 'TransportReportLegActivities';
  rows?: Maybe<Array<Maybe<TransportReportLegActivity>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type TransportReportLegActivitiesQuery = {
  activityType?: Maybe<Array<Maybe<TransportActivityType>>>;
  department?: Maybe<Scalars['String']>;
  createdAtStartDate?: Maybe<Scalars['DateTime']>;
  createdAtEndDate?: Maybe<Scalars['DateTime']>;
  editedAtStartDate?: Maybe<Scalars['DateTime']>;
  editedAtEndDate?: Maybe<Scalars['DateTime']>;
  editedUuid?: Maybe<Scalars['UUID']>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TransportReportLegActivity = {
  __typename?: 'TransportReportLegActivity';
  driverUuid?: Maybe<Scalars['UUID']>;
  driverNick?: Maybe<Scalars['String']>;
  driverCode?: Maybe<Scalars['String']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  vehicleNick?: Maybe<Scalars['String']>;
  vehicleCode?: Maybe<Scalars['String']>;
  vehicleDepartments?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  trailerNick?: Maybe<Scalars['String']>;
  trailerCode?: Maybe<Scalars['String']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  tripType?: Maybe<Scalars['String']>;
  tripSequence?: Maybe<Scalars['Int']>;
  legUuid?: Maybe<Scalars['UUID']>;
  legSequence?: Maybe<Scalars['Int']>;
  jobNo?: Maybe<Scalars['String']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  activityDate?: Maybe<Scalars['DateTime']>;
  activityType?: Maybe<TransportActivityType>;
  minuteVariance?: Maybe<Scalars['Int']>;
  usrType?: Maybe<TransportReportLegActivityUsrType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  editedAt?: Maybe<Scalars['DateTime']>;
  editedBy?: Maybe<User>;
  editedUuid?: Maybe<Scalars['UUID']>;
  department?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookingDepartments?: Maybe<Array<Maybe<Scalars['String']>>>;
  isDriverApp?: Maybe<Scalars['Boolean']>;
};

export enum TransportReportLegActivityUsrType {
  Dr = 'DR',
  Op = 'OP'
}

export type TransportReportTrip = {
  __typename?: 'TransportReportTrip';
  _id?: Maybe<Scalars['UUID']>;
  uuid?: Maybe<Scalars['UUID']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  bookingType?: Maybe<Scalars['String']>;
  shipperName: Scalars['String'];
  shipperUuid: Scalars['UUID'];
  shipperAddress?: Maybe<Address>;
  shipperAddressCache?: Maybe<Scalars['JSON']>;
  consigneeName?: Maybe<Scalars['String']>;
  consigneeUuid: Scalars['UUID'];
  consigneeAddress?: Maybe<Address>;
  consigneeAddressCache?: Maybe<Scalars['JSON']>;
  billToCode?: Maybe<Scalars['String']>;
  billToName?: Maybe<Scalars['String']>;
  billToUuid?: Maybe<Scalars['UUID']>;
  billToAccount?: Maybe<Scalars['UUID']>;
  billToSource?: Maybe<TransportSource>;
  bookingDetails?: Maybe<Scalars['JSON']>;
  bookingNo?: Maybe<Scalars['String']>;
  bookingDepts?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookingTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  customsDocNo?: Maybe<Scalars['String']>;
  shipperRef?: Maybe<Scalars['String']>;
  consigneeRef?: Maybe<Scalars['String']>;
  bl?: Maybe<Scalars['String']>;
  houseBl?: Maybe<Scalars['String']>;
  shipmentType?: Maybe<ShipmentTypeInput>;
  shippingRef?: Maybe<Scalars['String']>;
  saBookingNo?: Maybe<Scalars['String']>;
  internalRef?: Maybe<Scalars['String']>;
  scn?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  bookingStatus?: Maybe<BookingStatus>;
  no?: Maybe<Scalars['String']>;
  jobNo?: Maybe<Scalars['String']>;
  containerType?: Maybe<Scalars['String']>;
  transportType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  uom?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  weightUnit?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
  volumeUnit?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  dept?: Maybe<Scalars['String']>;
  commodities?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipperRequiredDate?: Maybe<Scalars['DateTime']>;
  consigneeRequiredDate?: Maybe<Scalars['DateTime']>;
  jobStatus?: Maybe<JobStatus>;
  jobType?: Maybe<Scalars['String']>;
  tripSequence?: Maybe<Scalars['Int']>;
  tripType?: Maybe<Scalars['String']>;
  tripStatus?: Maybe<TripStatus>;
  timeAtShipperMins?: Maybe<Scalars['Int']>;
  timeAtConsigneeMins?: Maybe<Scalars['Int']>;
  firstLegStart?: Maybe<Scalars['DateTime']>;
  firstLegStartOut?: Maybe<Scalars['DateTime']>;
  lastLegEnd?: Maybe<Scalars['DateTime']>;
  lastLegEndOut?: Maybe<Scalars['DateTime']>;
  legStatuses?: Maybe<Array<Maybe<LegStatus>>>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  driverNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  driverCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  driverEntities?: Maybe<Array<Maybe<Driver>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vehicleNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleDepts?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleEntities?: Maybe<Array<Maybe<Vehicle>>>;
  trailerUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  trailerNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailerCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailerEntities?: Maybe<Array<Maybe<Trailer>>>;
  estimatedDistanceKm?: Maybe<Scalars['Int']>;
  actualDistanceKm?: Maybe<Scalars['Int']>;
  estimatedTravelTimeMins?: Maybe<Scalars['Int']>;
  actualTravelTimeMins?: Maybe<Scalars['Int']>;
  transportUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  transportNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  transportSources?: Maybe<Array<Maybe<TransportSource>>>;
  remarks?: Maybe<Array<Maybe<Scalars['String']>>>;
  transportJobs?: Maybe<Array<Maybe<TransportJob>>>;
  incentiveVoucherNos?: Maybe<Array<Maybe<Scalars['String']>>>;
  incentiveVoucherDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  incentiveVoucherTotal?: Maybe<Scalars['Float']>;
  incentiveVoucherStatuses?: Maybe<Array<Maybe<Scalars['String']>>>;
  incentiveVoucherUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  incentiveVouchers?: Maybe<Array<Maybe<IncentiveVoucher>>>;
  shiftNos?: Maybe<Array<Maybe<Scalars['String']>>>;
  shiftUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  shifts?: Maybe<Array<Maybe<Shift>>>;
  costItemLocalCurrency?: Maybe<Scalars['String']>;
  costItemCostCurrencies?: Maybe<Array<Maybe<Scalars['String']>>>;
  costItemCostTotal?: Maybe<Scalars['Float']>;
  costItemCostLocalTotal?: Maybe<Scalars['Float']>;
  costItemSellCurrencies?: Maybe<Array<Maybe<Scalars['String']>>>;
  costItemSellTotal?: Maybe<Scalars['Float']>;
  costItemSellLocalTotal?: Maybe<Scalars['Float']>;
  costItemARTotal?: Maybe<Scalars['Float']>;
  costItemARDraftTotal?: Maybe<Scalars['Float']>;
  costItemAPTotal?: Maybe<Scalars['Float']>;
  costItemAPDraftTotal?: Maybe<Scalars['Float']>;
  voucherNos?: Maybe<Array<Maybe<Scalars['String']>>>;
  voucherAccountDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  voucherIssueDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  voucherArTotal?: Maybe<Scalars['Float']>;
  voucherArLocalTotal?: Maybe<Scalars['Float']>;
  voucherApTotal?: Maybe<Scalars['Float']>;
  voucherApLocalTotal?: Maybe<Scalars['Float']>;
  voucherCurrencies?: Maybe<Array<Maybe<Scalars['String']>>>;
  voucherLocalCurrency?: Maybe<Scalars['String']>;
  voucherStatuses?: Maybe<Array<Maybe<Scalars['String']>>>;
  voucherUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  vouchers?: Maybe<Array<Maybe<Voucher>>>;
  booking?: Maybe<Booking>;
};

export type TransportReportTripQuery = {
  bookingStatuses?: Maybe<Array<Maybe<BookingStatus>>>;
  jobStatuses?: Maybe<Array<Maybe<JobStatus>>>;
  tripStatuses?: Maybe<Array<Maybe<TripStatus>>>;
  legStatuses?: Maybe<Array<Maybe<LegStatus>>>;
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  billToUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  shipperUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  consigneeUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  fromZones?: Maybe<Array<Maybe<Scalars['String']>>>;
  toZones?: Maybe<Array<Maybe<Scalars['String']>>>;
  fromCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  toCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  transportType?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  driverUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  transportUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  transportNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  transportSources?: Maybe<Array<Maybe<TransportSource>>>;
  billToSources?: Maybe<Array<Maybe<TransportSource>>>;
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  jobUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  tripUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  legUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  bookingTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  tripTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipperRequiredDateStart?: Maybe<Scalars['DateTime']>;
  shipperRequiredDateEnd?: Maybe<Scalars['DateTime']>;
  shipOutStartDate?: Maybe<Scalars['DateTime']>;
  shipOutEndDate?: Maybe<Scalars['DateTime']>;
  activityStartDate?: Maybe<Scalars['DateTime']>;
  activityEndDate?: Maybe<Scalars['DateTime']>;
  q?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  jsonQueryOptions?: Maybe<Array<Maybe<TransportJobQueryOptions>>>;
};

export type TransportReportTrips = {
  __typename?: 'TransportReportTrips';
  rows?: Maybe<Array<Maybe<TransportReportTrip>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum TransportSource {
  Own = 'OWN',
  Intercompany = 'INTERCOMPANY',
  Interbranch = 'INTERBRANCH',
  Outsource = 'OUTSOURCE'
}

export type TriggerComputeTripSummaryInput = {
  key?: Maybe<Scalars['String']>;
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
};

export type TriggerJobReportsInput = {
  key?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};

export type Trip = {
  __typename?: 'Trip';
  uuid?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  waybillId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<TripStatus>;
  sequence?: Maybe<Scalars['Int']>;
  num?: Maybe<Scalars['String']>;
  seal?: Maybe<Scalars['String']>;
  fromUuid?: Maybe<Scalars['UUID']>;
  from?: Maybe<Address>;
  toUuid?: Maybe<Scalars['UUID']>;
  to?: Maybe<Address>;
  remarks?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  legs?: Maybe<Array<Maybe<TransportJob>>>;
};

export type TripInput = {
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<TripStatus>;
  num?: Maybe<Scalars['String']>;
  from?: Maybe<AddressInput>;
  to?: Maybe<AddressInput>;
  sequence?: Maybe<Scalars['Float']>;
  legs?: Maybe<Array<Maybe<LegInput>>>;
  remarks?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  seal?: Maybe<Scalars['String']>;
};

export type TripLocations = {
  __typename?: 'TripLocations';
  trip?: Maybe<TransportJob>;
  locations?: Maybe<Array<Maybe<TruckLocation>>>;
};

export type Trips = {
  __typename?: 'Trips';
  rows?: Maybe<Array<Maybe<Trip>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum TripStatus {
  Pending = 'PENDING',
  Planned = 'PLANNED',
  Started = 'STARTED',
  AtPickup = 'AT_PICKUP',
  Enroute = 'ENROUTE',
  Staged = 'STAGED',
  AtDropoff = 'AT_DROPOFF',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
  Deleted = 'DELETED'
}

export type TripSummaries = {
  __typename?: 'TripSummaries';
  rows?: Maybe<Array<Maybe<TripSummary>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type TripSummariesQueryInput = {
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  ownerType?: Maybe<Array<Maybe<VehicleOwnerType>>>;
  transportSources?: Maybe<Array<Maybe<TransportSource>>>;
  billToSources?: Maybe<Array<Maybe<TransportSource>>>;
  limit?: Maybe<Scalars['Int']>;
};

export type TripSummary = {
  __typename?: 'TripSummary';
  uuid?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
  baseCompanyUuid?: Maybe<Scalars['UUID']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  ladenCount?: Maybe<Scalars['Int']>;
  ladenUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  ladenTrips?: Maybe<Array<Maybe<TransportJob>>>;
  emptyCount?: Maybe<Scalars['Int']>;
  emptyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  emptyTrips?: Maybe<EmptyTrips>;
  emptyCost?: Maybe<Scalars['Float']>;
  ownerType?: Maybe<VehicleOwnerType>;
  transportSource?: Maybe<TransportSource>;
  billToSource?: Maybe<TransportSource>;
  dept?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TripTimings = {
  __typename?: 'TripTimings';
  tripSequence?: Maybe<Scalars['Int']>;
  tripType?: Maybe<Scalars['String']>;
  tripStatus?: Maybe<TripStatus>;
  timeAtShipperMins?: Maybe<Scalars['Int']>;
  timeAtConsigneeMins?: Maybe<Scalars['Int']>;
  firstLegStart?: Maybe<Scalars['DateTime']>;
  firstLegStartOut?: Maybe<Scalars['DateTime']>;
  lastLegEnd?: Maybe<Scalars['DateTime']>;
  lastLegEndOut?: Maybe<Scalars['DateTime']>;
};

export type TruckLocation = {
  __typename?: 'TruckLocation';
  loc?: Maybe<Point>;
  branches?: Maybe<Array<Maybe<Scalars['String']>>>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  odometer?: Maybe<Scalars['Float']>;
  idling?: Maybe<Scalars['Boolean']>;
  pmId?: Maybe<Scalars['String']>;
  reg?: Maybe<Scalars['String']>;
  datetime?: Maybe<Scalars['Float']>;
  ignition?: Maybe<Scalars['Boolean']>;
};

export type TruckLocationLatest = {
  __typename?: 'TruckLocationLatest';
  loc?: Maybe<Point>;
  branches?: Maybe<Array<Maybe<Scalars['String']>>>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  odometer?: Maybe<Scalars['Float']>;
  idling?: Maybe<Scalars['Boolean']>;
  pmId?: Maybe<Scalars['String']>;
  reg?: Maybe<Scalars['String']>;
  datetime?: Maybe<Scalars['Float']>;
  ignition?: Maybe<Scalars['Boolean']>;
};

export type TruckSpeeds = {
  __typename?: 'TruckSpeeds';
  id?: Maybe<Scalars['String']>;
  speeds?: Maybe<Scalars['JSON']>;
};

export type UndeleteIncentiveTypeInput = {
  _id?: Maybe<Scalars['UUID']>;
};

export type UpdateAddressInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<AddressType>>>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  address4?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  areaCode?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AddressTags>>>;
  status?: Maybe<AddressStatus>;
  location?: Maybe<Array<Maybe<Scalars['Float']>>>;
  plusCode?: Maybe<Scalars['String']>;
  placeId?: Maybe<Scalars['String']>;
  countryAlpha3?: Maybe<Scalars['LimitedString']>;
};

export type UpdateAddressLocationInput = {
  uuid?: Maybe<Scalars['UUID']>;
  location?: Maybe<Array<Maybe<Scalars['Float']>>>;
  plusCode?: Maybe<Scalars['String']>;
  placeId?: Maybe<Scalars['String']>;
  countryAlpha3?: Maybe<Scalars['LimitedString']>;
};

export type UpdateAvailabilityInput = {
  date?: Maybe<Scalars['DateTime']>;
  entityUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  type?: Maybe<EntityType>;
  status?: Maybe<AvailabilityStatus>;
  remarks?: Maybe<Scalars['String']>;
};

export type UpdateBaseCompanyInput = {
  uuid: Scalars['UUID'];
  shortCode?: Maybe<Scalars['String']>;
  types?: Maybe<Array<CompanyType>>;
  name?: Maybe<Scalars['String']>;
  registration?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  status?: Maybe<CompanyStatus>;
  details?: Maybe<BaseCompanyDetailsInput>;
  subscription?: Maybe<CompanySubscriptionType>;
  timezone?: Maybe<Scalars['String']>;
  currencyUuid?: Maybe<Scalars['UUID']>;
};

export type UpdateBillingUnitInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<BillingUnitStatus>;
};

export type UpdateBookingDetailsInput = {
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  bl?: Maybe<Scalars['String']>;
  houseBl?: Maybe<Scalars['String']>;
  customsDocNo?: Maybe<Array<Maybe<Scalars['String']>>>;
  saBookingNo?: Maybe<Scalars['String']>;
  shippingRef?: Maybe<Scalars['String']>;
  internalReference?: Maybe<Scalars['String']>;
  scn?: Maybe<Scalars['String']>;
  shipCallSign?: Maybe<Scalars['String']>;
  voyageNo?: Maybe<Scalars['String']>;
  vesselId?: Maybe<Scalars['String']>;
  vesselName?: Maybe<Scalars['String']>;
  motherVesselName?: Maybe<Scalars['String']>;
  motherVesselVoyageNo?: Maybe<Scalars['String']>;
  transshipmentPort?: Maybe<Scalars['String']>;
  manifestNo?: Maybe<Scalars['String']>;
  shipmentType?: Maybe<ShipmentTypeInput>;
  shipperRef?: Maybe<Scalars['String']>;
  consigneeRef?: Maybe<Scalars['String']>;
  operatorOri?: Maybe<Scalars['String']>;
  operatorDest?: Maybe<Scalars['String']>;
  terminalOri?: Maybe<Scalars['String']>;
  terminalDest?: Maybe<Scalars['String']>;
  haulierOriRef?: Maybe<Scalars['String']>;
  haulierDestRef?: Maybe<Scalars['String']>;
  forwarderOriRef?: Maybe<Scalars['String']>;
  forwarderDestRef?: Maybe<Scalars['String']>;
  linerOriRef?: Maybe<Scalars['String']>;
  linerDestRef?: Maybe<Scalars['String']>;
  incoTerm?: Maybe<IncoTerm>;
  transportDocumentType?: Maybe<TransportDocumentType>;
  departments?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateBookingInput = {
  uuid: Scalars['UUID'];
  quotationUuid?: Maybe<Scalars['String']>;
  companyUuid?: Maybe<Scalars['UUID']>;
  remarks?: Maybe<Scalars['String']>;
  transportDocumentType?: Maybe<TransportDocumentType>;
  serviceTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<BookingTagType>>>;
  placeOri?: Maybe<Scalars['String']>;
  placeDest?: Maybe<Scalars['String']>;
  shipperUuid?: Maybe<Scalars['UUID']>;
  shipperAddressUuid?: Maybe<Scalars['UUID']>;
  consigneeUuid?: Maybe<Scalars['UUID']>;
  consigneeAddressUuid?: Maybe<Scalars['UUID']>;
  portOriUuid?: Maybe<Scalars['UUID']>;
  portDestUuid?: Maybe<Scalars['UUID']>;
  billToUuid?: Maybe<Scalars['UUID']>;
  haulierOriUuid?: Maybe<Scalars['UUID']>;
  haulierDestUuid?: Maybe<Scalars['UUID']>;
  forwarderOriUuid?: Maybe<Scalars['UUID']>;
  forwarderDestUuid?: Maybe<Scalars['UUID']>;
  linerOriUuid?: Maybe<Scalars['UUID']>;
  linerDestUuid?: Maybe<Scalars['UUID']>;
  warehouseUuid?: Maybe<Scalars['UUID']>;
  warehouseAddressUuid?: Maybe<Scalars['UUID']>;
  commodities?: Maybe<Array<Maybe<Scalars['String']>>>;
  details?: Maybe<Scalars['JSON']>;
};

export type UpdateBookingTypeInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<BookingTypeStatus>;
  flowType?: Maybe<Scalars['String']>;
  dynamicFields?: Maybe<Array<Maybe<BookingTypeDynamicFieldsInput>>>;
};

export type UpdateChannelInput = {
  uuid: Scalars['UUID'];
  senderUuid?: Maybe<Scalars['UUID']>;
  receiverUuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdateChargeCategoryInput = {
  uuid: Scalars['UUID'];
  code: Scalars['String'];
  type: ChargeCategoryType;
  description: Scalars['String'];
  sequence?: Maybe<Scalars['String']>;
};

export type UpdateChargeItemCodeInput = {
  uuid: Scalars['UUID'];
  type?: Maybe<ChargeItemCodeType>;
  glCodeUuid: Scalars['UUID'];
};

export type UpdateChargeItemInput = {
  uuid: Scalars['UUID'];
  code: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  status: ChargeItemStatus;
  rateType?: Maybe<ChargeRateType>;
  sellTaxUuid?: Maybe<Scalars['UUID']>;
  sellRate?: Maybe<Scalars['Float']>;
  sellCurrencyUuid?: Maybe<Scalars['UUID']>;
  revenueCodeUuid?: Maybe<Scalars['UUID']>;
  costTaxUuid?: Maybe<Scalars['UUID']>;
  costRate?: Maybe<Scalars['Float']>;
  costCurrencyUuid?: Maybe<Scalars['UUID']>;
  expenseCodeUuid?: Maybe<Scalars['UUID']>;
  term?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<ChargeItemTagType>>>;
};

export type UpdateChargeItemMiscInput = {
  uuid?: Maybe<Scalars['UUID']>;
  customerUuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  documentUuid?: Maybe<Scalars['UUID']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
};

export type UpdateChargeItemTaxInput = {
  uuid: Scalars['UUID'];
  type?: Maybe<ChargeItemTaxType>;
  rate?: Maybe<Scalars['Float']>;
  rateType?: Maybe<ChargeRateType>;
  taxUuid: Scalars['UUID'];
};

export type UpdateCompanyCodeInput = {
  uuid: Scalars['UUID'];
  code?: Maybe<Scalars['String']>;
  debtorCode?: Maybe<Scalars['String']>;
  debtorTerm?: Maybe<Scalars['Int']>;
  creditorCode?: Maybe<Scalars['String']>;
  creditorTerm?: Maybe<Scalars['Int']>;
  taxNumber?: Maybe<Scalars['String']>;
  registration?: Maybe<Scalars['String']>;
  overrideDuplicateCode?: Maybe<Scalars['Boolean']>;
};

export type UpdateCompanyInput = {
  uuid: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  registration?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  status?: Maybe<CompanyStatus>;
  billToUuid?: Maybe<Scalars['UUID']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  types?: Maybe<Array<CompanyType>>;
  description?: Maybe<Scalars['String']>;
  countryAlpha3: Scalars['LimitedString'];
  preferredCurrencyUuid?: Maybe<Scalars['UUID']>;
};

export type UpdateContactInput = {
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<ContactStatus>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
};

export type UpdateContainerGradeInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Int']>;
  status?: Maybe<ContainerGradeStatus>;
};

export type UpdateContainerTypeInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Int']>;
  status?: Maybe<ContainerTypeStatus>;
};

export type UpdateCostItemInput = {
  uuid: Scalars['UUID'];
  accrual?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  sellCurrencyUuid?: Maybe<Scalars['UUID']>;
  sellExchangeRate?: Maybe<Scalars['Float']>;
  sellBaseRate?: Maybe<Scalars['Float']>;
  costCurrencyUuid?: Maybe<Scalars['UUID']>;
  costExchangeRate?: Maybe<Scalars['Float']>;
  costBaseRate?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
};

export type UpdateDocumentCreator = {
  uuid: Scalars['UUID'];
  bookingUuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<DocumentCreatorStatus>;
  type?: Maybe<DocumentCreatorType>;
  data?: Maybe<DataDetailsInput>;
  dataJSON?: Maybe<Scalars['JSON']>;
  dataJSONObject?: Maybe<Scalars['JSONObject']>;
  template?: Maybe<Scalars['String']>;
};

export type UpdateDocumentCreatorTemplate = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
};

export type UpdateDriverCompanyInput = {
  uuid?: Maybe<Scalars['UUID']>;
  companyUuid?: Maybe<Scalars['UUID']>;
  companyType?: Maybe<EntityCompanyUpdateType>;
  companyReference?: Maybe<Scalars['String']>;
};

export type UpdateDriverEmployeeInput = {
  uuid?: Maybe<Scalars['UUID']>;
  employeeUuid: Scalars['UUID'];
};

export type UpdateDriverImageInput = {
  uuid?: Maybe<Scalars['UUID']>;
  attachmentUuid?: Maybe<Scalars['UUID']>;
};

export type UpdateDriverInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  ownerType?: Maybe<DriverOwnerType>;
  nickName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  registration?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<DriverType>;
  description?: Maybe<Scalars['String']>;
  countryAlpha3?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  governmentId?: Maybe<Scalars['String']>;
  contact?: Maybe<Array<Maybe<ContactSimpleInput>>>;
  address?: Maybe<Array<Maybe<AddEntityAddressInput>>>;
  department?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehiclePreference?: Maybe<Array<Maybe<Scalars['String']>>>;
  healthIssues?: Maybe<Array<Maybe<Scalars['String']>>>;
  healthAllergies?: Maybe<Array<Maybe<Scalars['String']>>>;
  healthBloodtype?: Maybe<Bloodtype>;
  nextOfKinName?: Maybe<Scalars['String']>;
  nextOfKinRelationship?: Maybe<Scalars['String']>;
  nextOfKinContact?: Maybe<Array<Maybe<ContactSimpleInput>>>;
  nextOfKinAddress?: Maybe<Array<Maybe<AddEntityAddressInput>>>;
};

export type UpdateDriverStatusInput = {
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<DriverStatus>;
};

export type UpdateEntityDocumentInput = {
  uuid: Scalars['UUID'];
  id?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<EntityFieldInput>>>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};

export type UpdateEntityDocumentStatusInput = {
  uuid: Scalars['UUID'];
  status: DocumentStatus;
};

export type UpdateEntityRequirementCategoryInput = {
  uuid: Scalars['UUID'];
  entityType: EntityType;
  allowedCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateEntityRequirementsInput = {
  uuid: Scalars['UUID'];
  entityType: EntityType;
  documentRequirements: Array<Maybe<EntityDocumentRequirementInput>>;
};

export type UpdateExchangeRateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  rate?: Maybe<Scalars['Float']>;
};

export type UpdateFafInput = {
  uuid?: Maybe<Scalars['UUID']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  vendorUuid?: Maybe<Scalars['UUID']>;
  customerUuid?: Maybe<Scalars['UUID']>;
  rate?: Maybe<Scalars['Float']>;
};

export type UpdateFuelInput = {
  _id: Scalars['UUID'];
  driverUuid?: Maybe<Scalars['UUID']>;
  date: Scalars['DateTime'];
  ref?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  odometer: Scalars['Int'];
  amount: Scalars['Float'];
  amountRemaining?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  remarks?: Maybe<Scalars['String']>;
};

export type UpdateGateLogInput = {
  _id: Scalars['UUID'];
  type?: Maybe<GateLogType>;
  date?: Maybe<Scalars['DateTime']>;
  yardUuid?: Maybe<Scalars['UUID']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  odometer?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['String']>;
};

export type UpdateGlCodeInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateGroupInput = {
  uuid: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  ruleCondition?: Maybe<RuleCondition>;
  rules?: Maybe<Array<Maybe<GroupRuleInput>>>;
};

export type UpdateIncentiveInput = {
  _id?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  overrideDuplicateLeg?: Maybe<Scalars['Boolean']>;
  costCode?: Maybe<Scalars['String']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['UUID']>;
  remarks?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
};

export type UpdateIncentiveRateInput = {
  _id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  transportType?: Maybe<Scalars['String']>;
  uom?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Int']>;
  rates?: Maybe<Array<Maybe<InputIncentiveRateDetails>>>;
};

export type UpdateIncentiveTypeInput = {
  _id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  glCodeUuid?: Maybe<Scalars['UUID']>;
  isJobRequired?: Maybe<Scalars['Boolean']>;
  details?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type UpdateIncentiveVoucherInput = {
  _id?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['DateTime']>;
  incentiveUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  remarks?: Maybe<Scalars['String']>;
};

export type UpdateIntegrationDetailInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['String']>;
  integrationUuid: Scalars['UUID'];
  companyUuid?: Maybe<Scalars['UUID']>;
};

export type UpdateIntegrationMappingInput = {
  uuid?: Maybe<Scalars['UUID']>;
  integrationDetailUuid?: Maybe<Scalars['UUID']>;
  customerUuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  externalCode?: Maybe<Scalars['String']>;
  internalCode?: Maybe<Scalars['UUID']>;
};

export type UpdateJobInput = {
  uuid?: Maybe<Scalars['UUID']>;
  no?: Maybe<Scalars['String']>;
  reference?: Maybe<JobReferencesInput>;
  details?: Maybe<Scalars['JSON']>;
  remarks?: Maybe<Scalars['String']>;
};

export type UpdateJobOptionInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<JobOptionStatus>;
};

export type UpdateJobTripInput = {
  jobUuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  trips?: Maybe<Array<Maybe<JobTripUpdateInput>>>;
};

export type UpdateJobTypeInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<JobTypeStatus>;
  tripDetails?: Maybe<Array<Maybe<JobTypeDetailsInput>>>;
  requiredFields?: Maybe<Array<Maybe<JobTypeRequiredInput>>>;
  dynamicFields?: Maybe<Array<Maybe<JobTypeDynamicInput>>>;
  unitOptions?: Maybe<Array<Maybe<JobTypeUnitOptionsInput>>>;
  computeType?: Maybe<JobTypeComputeType>;
};

export type UpdateLegInput = {
  _id?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['UUID']>;
  transportUuid?: Maybe<Scalars['UUID']>;
  driverCode?: Maybe<Scalars['String']>;
  driverName?: Maybe<Scalars['String']>;
  driverUuid?: Maybe<Scalars['UUID']>;
  vehicleCode?: Maybe<Scalars['String']>;
  vehicleName?: Maybe<Scalars['String']>;
  vehicleDepartments?: Maybe<Array<Maybe<Scalars['String']>>>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  trailerCode?: Maybe<Scalars['String']>;
  trailerName?: Maybe<Scalars['String']>;
  trailerUuid?: Maybe<Scalars['UUID']>;
  remarks?: Maybe<Scalars['String']>;
  isSynchronous?: Maybe<Scalars['Boolean']>;
};

export type UpdateLegTimingInput = {
  _id?: Maybe<Scalars['UUID']>;
  tripUuid?: Maybe<Scalars['UUID']>;
  legUuid?: Maybe<Scalars['UUID']>;
  planStart?: Maybe<Scalars['DateTime']>;
  start?: Maybe<Scalars['DateTime']>;
  startOut?: Maybe<Scalars['DateTime']>;
  planEnd?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  endOut?: Maybe<Scalars['DateTime']>;
  isSynchronous?: Maybe<Scalars['Boolean']>;
};

export type UpdatePaymentInput = {
  uuid: Scalars['UUID'];
  date: Scalars['DateTime'];
  reference?: Maybe<Scalars['String']>;
  transactionType?: Maybe<PaymentTransactionType>;
  remarks?: Maybe<Scalars['String']>;
  voucherPayments?: Maybe<Array<Maybe<AddVoucherPaymentInput>>>;
};

export type UpdatePortalCompanyInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  details?: Maybe<PortalCompanyDetailsInput>;
  viewCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  bookCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  reports?: Maybe<Array<Maybe<PortalCompanyReportConfigInput>>>;
};

export type UpdateQuotationInput = {
  uuid: Scalars['UUID'];
  term?: Maybe<Scalars['Int']>;
  status?: Maybe<QuotationStatus>;
  date?: Maybe<Scalars['DateTime']>;
  expiry?: Maybe<Scalars['DateTime']>;
  buyerUuid?: Maybe<Scalars['UUID']>;
  buyerAddressUuid?: Maybe<Scalars['UUID']>;
  buyerContactUuid?: Maybe<Scalars['UUID']>;
  sellerAddressUuid?: Maybe<Scalars['UUID']>;
  sellerContactUuid?: Maybe<Scalars['UUID']>;
  description?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<QuotationTagTypes>>>;
};

export type UpdateQuotationItemInput = {
  uuid: Scalars['UUID'];
  chargeItemUuid?: Maybe<Scalars['UUID']>;
  description?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  containerType?: Maybe<Scalars['String']>;
  rateType?: Maybe<ChargeRateType>;
  sellRate?: Maybe<Scalars['Float']>;
  sellCurrencyUuid?: Maybe<Scalars['UUID']>;
  sellTaxUuid?: Maybe<Scalars['UUID']>;
  minChargeAmount?: Maybe<Scalars['Float']>;
  maxChargeAmount?: Maybe<Scalars['Float']>;
  costRate?: Maybe<Scalars['Float']>;
  costCurrencyUuid?: Maybe<Scalars['UUID']>;
  costTaxUuid?: Maybe<Scalars['UUID']>;
  tags?: Maybe<Array<Maybe<QuotationItemTags>>>;
};

export type UpdateReportInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  status?: Maybe<ReportStatus>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<ReportCategories>>>;
  sorts?: Maybe<Array<Maybe<Scalars['String']>>>;
  columns?: Maybe<Array<Maybe<ReportColumnInput>>>;
};

export type UpdateRoleInput = {
  uuid: Scalars['UUID'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<RoleStatus>;
};

export type UpdateSettingInput = {
  uuid?: Maybe<Scalars['UUID']>;
  key?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  setting?: Maybe<Array<Maybe<SettingInput>>>;
};

export type UpdateShiftInput = {
  _id?: Maybe<Scalars['UUID']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  vehicleUuid?: Maybe<Scalars['UUID']>;
  breaks?: Maybe<Array<Maybe<ShiftBreakInput>>>;
  remarks?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateTaxInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  percentage?: Maybe<Scalars['Float']>;
  exemptionDocumentUuid?: Maybe<Scalars['UUID']>;
};

export type UpdateTimeMins = {
  __typename?: 'UpdateTimeMins';
  avg?: Maybe<Scalars['Int']>;
  c?: Maybe<Scalars['Int']>;
};

export type UpdateTrailerCompanyInput = {
  uuid?: Maybe<Scalars['UUID']>;
  companyUuid?: Maybe<Scalars['UUID']>;
  companyType?: Maybe<EntityCompanyUpdateType>;
  companyReference?: Maybe<Scalars['String']>;
};

export type UpdateTrailerImageInput = {
  uuid?: Maybe<Scalars['UUID']>;
  attachmentUuid?: Maybe<Scalars['UUID']>;
};

export type UpdateTrailerInput = {
  uuid?: Maybe<Scalars['UUID']>;
  registration?: Maybe<Scalars['String']>;
  ownerType?: Maybe<TrailerOwnerType>;
  make?: Maybe<Scalars['String']>;
  loadCapacity?: Maybe<Scalars['Int']>;
  registrationYear?: Maybe<Scalars['Int']>;
  manufactureYear?: Maybe<Scalars['Int']>;
  trailerType?: Maybe<Scalars['String']>;
  tareWeight?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  department?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateTrailerStatusInput = {
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<TrailerStatus>;
};

export type UpdateTransportAreaCodeInput = {
  uuid: Scalars['UUID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  zone?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  location?: Maybe<Array<Scalars['Float']>>;
  locationPolygon?: Maybe<Array<Maybe<Array<Scalars['Float']>>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateTransportJobTypeInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<TransportJobTypeStatus>;
};

export type UpdateTransportRateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  vendorUuid?: Maybe<Scalars['UUID']>;
  customerUuid?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to: Scalars['String'];
  distance?: Maybe<Scalars['Int']>;
  rates?: Maybe<Array<Maybe<InputTransportRateDetails>>>;
};

export type UpdateTripInput = {
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<TripStatus>;
  remarks?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  seal?: Maybe<Scalars['String']>;
};

export type UpdateVehicleCompanyInput = {
  uuid?: Maybe<Scalars['UUID']>;
  companyUuid?: Maybe<Scalars['UUID']>;
  companyType?: Maybe<EntityCompanyUpdateType>;
  companyReference?: Maybe<Scalars['String']>;
};

export type UpdateVehicleImageInput = {
  uuid?: Maybe<Scalars['UUID']>;
  attachmentUuid?: Maybe<Scalars['UUID']>;
};

export type UpdateVehicleInput = {
  uuid?: Maybe<Scalars['UUID']>;
  registration?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  department?: Maybe<Array<Maybe<Scalars['String']>>>;
  engineCapacity?: Maybe<Scalars['Int']>;
  registrationYear?: Maybe<Scalars['Int']>;
  manufactureYear?: Maybe<Scalars['Int']>;
  chassisNo?: Maybe<Scalars['String']>;
  engineNo?: Maybe<Scalars['String']>;
  loadCapacity?: Maybe<Scalars['Int']>;
  tareWeight?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  driverPreference?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailerPreference?: Maybe<Array<Maybe<Scalars['String']>>>;
  ownerType?: Maybe<VehicleOwnerType>;
  antilockBrakes?: Maybe<Scalars['Boolean']>;
  airBags?: Maybe<Scalars['Boolean']>;
  axleWeight?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type UpdateVehicleStatusInput = {
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<VehicleStatus>;
};

export type UpdateVolumeUnitInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<VolumeUnitStatus>;
};

export type UpdateVoucherInput = {
  uuid: Scalars['UUID'];
  invoiceNumber?: Maybe<Scalars['String']>;
  customerUuid?: Maybe<Scalars['UUID']>;
  vendorUuid?: Maybe<Scalars['UUID']>;
  addressUuid?: Maybe<Scalars['UUID']>;
  paymentType?: Maybe<PaymentType>;
  issueDate?: Maybe<Scalars['DateTime']>;
  accountDate?: Maybe<Scalars['DateTime']>;
  term?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  internalDescription?: Maybe<Scalars['String']>;
  documentCreatorTemplateUuid?: Maybe<Scalars['UUID']>;
  salesPersonUuid?: Maybe<Scalars['UUID']>;
  contactPerson?: Maybe<Scalars['String']>;
};

export type UpdateVoucherItemInput = {
  uuid: Scalars['UUID'];
  currencyUuid: Scalars['UUID'];
  quantity: Scalars['Float'];
  baseRate: Scalars['Float'];
  exchangeRate: Scalars['Float'];
  localExchangeRate: Scalars['Float'];
  unit?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  taxUuid: Scalars['UUID'];
  description?: Maybe<Scalars['String']>;
  jobUuid?: Maybe<Scalars['UUID']>;
  voucherItemCnUuid?: Maybe<Scalars['UUID']>;
};

export type UpdateWeightUnitInput = {
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  status?: Maybe<WeightUnitStatus>;
};

export type UpdateYardInput = {
  uuid: Scalars['UUID'];
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<YardStatus>;
  remarks?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
};


export type User = {
  __typename?: 'User';
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['UUID']>;
  auth0UserId?: Maybe<Scalars['String']>;
  auth0Token?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Email']>;
  picture?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  companies?: Maybe<Array<Maybe<UserCompany>>>;
  baseCompanies?: Maybe<Array<Maybe<BaseCompany>>>;
  algoliaKey?: Maybe<Scalars['String']>;
};

export type UserCompany = {
  __typename?: 'UserCompany';
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<CompanyType>>>;
  status?: Maybe<CompanyStatus>;
  countryAlpha3?: Maybe<Scalars['LimitedString']>;
  country?: Maybe<Country>;
  employee?: Maybe<Employee>;
  currency?: Maybe<Currency>;
};

export type UserInput = {
  uuid: Scalars['UUID'];
  nickname?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
};

export type UserPreference = {
  __typename?: 'UserPreference';
  type?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Users = {
  __typename?: 'Users';
  rows?: Maybe<Array<Maybe<User>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type UserTimeout = {
  __typename?: 'UserTimeout';
  seconds?: Maybe<Scalars['Int']>;
};


export type Vehicle = {
  __typename?: 'Vehicle';
  uuid?: Maybe<Scalars['UUID']>;
  image?: Maybe<Attachment>;
  documents?: Maybe<Array<Maybe<DocumentDescription>>>;
  code?: Maybe<Scalars['String']>;
  department?: Maybe<Array<Maybe<Scalars['String']>>>;
  registration?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  engineCapacity?: Maybe<Scalars['Int']>;
  registrationYear?: Maybe<Scalars['Int']>;
  manufactureYear?: Maybe<Scalars['Int']>;
  chassisNo?: Maybe<Scalars['String']>;
  engineNo?: Maybe<Scalars['String']>;
  loadCapacity?: Maybe<Scalars['Int']>;
  tareWeight?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  driverPreference?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailerPreference?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<VehicleStatus>;
  ownerType?: Maybe<VehicleOwnerType>;
  antilockBrakes?: Maybe<Scalars['Boolean']>;
  airBags?: Maybe<Scalars['Boolean']>;
  axleWeight?: Maybe<Array<Maybe<Scalars['Int']>>>;
  companies?: Maybe<Array<Maybe<EntityCompany>>>;
  customers?: Maybe<Array<Maybe<EntityCompany>>>;
  subContractors?: Maybe<Array<Maybe<EntityCompany>>>;
  customerAddress?: Maybe<Array<Maybe<EntityCompanyAddress>>>;
  entityException?: Maybe<EntityExceptionOutcome>;
  plan?: Maybe<VehiclePlan>;
};

export enum VehicleOwnerType {
  Owned = 'OWNED',
  Intercompany = 'INTERCOMPANY',
  Interbranch = 'INTERBRANCH',
  Outsource = 'OUTSOURCE'
}

export type VehiclePlan = {
  __typename?: 'VehiclePlan';
  vehicleUuid?: Maybe<Scalars['UUID']>;
  jobsUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  shiftsUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  etaAvailable?: Maybe<Scalars['DateTime']>;
  explanation?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
};

export type VehiclesResults = {
  __typename?: 'VehiclesResults';
  rows?: Maybe<Array<Maybe<Vehicle>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum VehicleStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Service = 'SERVICE',
  Sold = 'SOLD',
  Deleted = 'DELETED'
}

export type Vessel = {
  __typename?: 'Vessel';
  uuid?: Maybe<Scalars['UUID']>;
  imo?: Maybe<Scalars['String']>;
  mmsi?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Viewer = {
  __typename?: 'Viewer';
  email: Scalars['String'];
  registered?: Maybe<Scalars['Boolean']>;
  baseCompanies?: Maybe<Array<Maybe<BaseCompany>>>;
  algoliaKey?: Maybe<Scalars['String']>;
  employee?: Maybe<Employee>;
  superAdmin?: Maybe<Employee>;
};

export type VolumeUnit = {
  __typename?: 'VolumeUnit';
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  baseCompanyUuid?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type VolumeUnits = {
  __typename?: 'VolumeUnits';
  rows?: Maybe<Array<Maybe<VolumeUnit>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum VolumeUnitStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}

export type Voucher = {
  __typename?: 'Voucher';
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  paymentType?: Maybe<PaymentType>;
  isCreditNote?: Maybe<Scalars['Boolean']>;
  status?: Maybe<VoucherStatus>;
  contactPerson?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  internalDescription?: Maybe<Scalars['String']>;
  voucherNumber?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['Float']>;
  baseSubTotal?: Maybe<Scalars['Float']>;
  localSubTotal?: Maybe<Scalars['Float']>;
  taxTotal?: Maybe<Scalars['Float']>;
  baseTaxTotal?: Maybe<Scalars['Float']>;
  localTaxTotal?: Maybe<Scalars['Float']>;
  taxRounding?: Maybe<Scalars['Float']>;
  localTotal?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  term?: Maybe<Scalars['Int']>;
  currency?: Maybe<Currency>;
  permissions?: Maybe<VoucherPermissions>;
  canApprove?: Maybe<Scalars['Boolean']>;
  canCancel?: Maybe<Scalars['Boolean']>;
  balance?: Maybe<Scalars['Float']>;
  transactionType?: Maybe<TransactionType>;
  owner?: Maybe<BaseCompany>;
  vendor?: Maybe<Company>;
  customer?: Maybe<Company>;
  address?: Maybe<Address>;
  salesPerson?: Maybe<User>;
  approvals?: Maybe<Array<Maybe<Approval>>>;
  voucherPayments?: Maybe<Array<Maybe<VoucherPayment>>>;
  issueDate?: Maybe<Scalars['DateTime']>;
  accountDate?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  bookings?: Maybe<Array<Maybe<Booking>>>;
  bookingDocuments?: Maybe<Array<Maybe<BookingDocument>>>;
  documentCreatorTemplate?: Maybe<DocumentCreatorTemplate>;
  voucherItems?: Maybe<Array<Maybe<VoucherItem>>>;
  createdBy?: Maybe<User>;
  approvedBy?: Maybe<User>;
  printCount?: Maybe<Scalars['Int']>;
};

export enum VoucherCategoryType {
  SupplierPayment = 'supplierPayment',
  CustomsPayment = 'customsPayment',
  CustPermits = 'custPermits',
  PortBill = 'portBill',
  ForeignAgent = 'foreignAgent',
  CustomerInvoice = 'customerInvoice',
  CreditNote = 'creditNote',
  Claim = 'claim'
}

export type VoucherItem = {
  __typename?: 'VoucherItem';
  uuid?: Maybe<Scalars['UUID']>;
  description?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  currency?: Maybe<Currency>;
  baseRate?: Maybe<Scalars['Float']>;
  exchangeRate?: Maybe<Scalars['Float']>;
  localExchangeRate?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  tax?: Maybe<Tax>;
  taxPercentage?: Maybe<Scalars['Float']>;
  taxTotal?: Maybe<Scalars['Float']>;
  baseTaxTotal?: Maybe<Scalars['Float']>;
  localTaxTotal?: Maybe<Scalars['Float']>;
  subTotal?: Maybe<Scalars['Float']>;
  baseSubTotal?: Maybe<Scalars['Float']>;
  localSubTotal?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  localTotal?: Maybe<Scalars['Float']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  bookingUuid?: Maybe<Scalars['UUID']>;
  voucher?: Maybe<Voucher>;
  costItem?: Maybe<CostItem>;
  voucherCn?: Maybe<Voucher>;
  voucherItemCn?: Maybe<VoucherItem>;
  job?: Maybe<Job>;
  booking?: Maybe<Booking>;
  editBy?: Maybe<User>;
};

export type VoucherItemQueryInput = {
  bookingUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};

export type VoucherPayment = {
  __typename?: 'VoucherPayment';
  uuid?: Maybe<Scalars['UUID']>;
  amount?: Maybe<Scalars['Float']>;
  voucherUuid?: Maybe<Scalars['UUID']>;
  voucher?: Maybe<Voucher>;
  payment?: Maybe<Payment>;
};

export type VoucherPermissions = {
  __typename?: 'VoucherPermissions';
  canApprove?: Maybe<Scalars['Boolean']>;
  canCancel?: Maybe<Scalars['Boolean']>;
};

export enum VoucherRevisionType {
  CreditNote = 'CREDIT_NOTE',
  Revision = 'REVISION',
  Void = 'VOID'
}

export type Vouchers = {
  __typename?: 'Vouchers';
  rows?: Maybe<Array<Maybe<Voucher>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export type VoucherSearchFilter = {
  baseCompanyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  companyUuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  voucherUuid?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  transactionType?: Maybe<Array<Maybe<Scalars['String']>>>;
  voucherType?: Maybe<Array<Maybe<Scalars['String']>>>;
  vendorUuid?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  customerUuid?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  paymentType?: Maybe<Array<Maybe<PaymentType>>>;
  status?: Maybe<Array<Maybe<VoucherStatus>>>;
  approvedCount?: Maybe<Scalars['Int']>;
  issueDate?: Maybe<Array<Maybe<Scalars['Date']>>>;
  accountDate?: Maybe<Array<Maybe<Scalars['Date']>>>;
  dueDate?: Maybe<Array<Maybe<Scalars['Date']>>>;
  total?: Maybe<Array<Maybe<Scalars['Int']>>>;
  paymentPaid?: Maybe<Array<Maybe<Scalars['Int']>>>;
  bookingUuid?: Maybe<Array<Maybe<Scalars['String']>>>;
  isCreditNote?: Maybe<Scalars['Boolean']>;
};

export type VouchersJson = {
  __typename?: 'VouchersJson';
  rows?: Maybe<Scalars['JSON']>;
  pageInfo?: Maybe<NumberPagination>;
};

export type VouchersSearchInput = {
  q?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<VoucherSearchFilter>;
};

export enum VoucherStatus {
  Draft = 'DRAFT',
  Submitted = 'SUBMITTED',
  Deleted = 'DELETED',
  Approved = 'APPROVED',
  Paid = 'PAID',
  PartiallyPaid = 'PARTIALLY_PAID',
  Voided = 'VOIDED'
}

export type VoucherTemplate = {
  __typename?: 'VoucherTemplate';
  type?: Maybe<Scalars['String']>;
  transactionCategory?: Maybe<Scalars['String']>;
  transactionType?: Maybe<Scalars['String']>;
  approvals?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookingDocuments?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum VoucherTypeType {
  Accrec = 'ACCREC',
  Accpay = 'ACCPAY'
}

export type Waypoint = {
  __typename?: 'Waypoint';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  seca?: Maybe<Scalars['Boolean']>;
};

export type WeightUnit = {
  __typename?: 'WeightUnit';
  uuid?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sorting?: Maybe<Scalars['Float']>;
  baseCompanyUuid?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type WeightUnits = {
  __typename?: 'WeightUnits';
  rows?: Maybe<Array<Maybe<WeightUnit>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum WeightUnitStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}

export type Yard = {
  __typename?: 'Yard';
  uuid?: Maybe<Scalars['UUID']>;
  ownerUuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<YardStatus>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<User>;
  updatedUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  createdUuid?: Maybe<Scalars['UUID']>;
};

export type YardQueryInput = {
  uuids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  q?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<YardStatus>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Yards = {
  __typename?: 'Yards';
  rows?: Maybe<Array<Maybe<Yard>>>;
  pageInfo?: Maybe<NumberPagination>;
};

export enum YardStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}
