window.config = {
  routerBasename: '/',
  customizationService: {
    dicomUploadComponent:
      '@ohif/extension-cornerstone.customizationModule.cornerstoneDicomUploadComponent',
  },
  enableGoogleCloudAdapter: false,
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  strictZSpacingForVolumeViewport: true,
  extensions: [],
  modes: [],
  showStudyList: true,
  // filterQueryParam: false,
  defaultDataSourceName: 'prod-dicom-store',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'prod-dicom-store',
      configuration: {
        friendlyName: 'dcmjs DICOMWeb Server',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-dicom-store/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-dicom-store/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-dicom-store/dicomWeb',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: false,
        dicomUploadEnabled: true,
        omitQuotationForMultipartRequest: true,
        configurationAPI: 'ohif.dataSourceConfigurationAPI.google',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'prod-lab-1',
      configuration: {
        friendlyName: 'Prod Lab 1',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-lab-1/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-lab-1/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-lab-1/dicomWeb',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: false,
        dicomUploadEnabled: true,
        omitQuotationForMultipartRequest: true,
        configurationAPI: 'ohif.dataSourceConfigurationAPI.google',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'prod-lab-2',
      configuration: {
        friendlyName: 'Prod Lab 2',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-lab-2/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-lab-2/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-lab-2/dicomWeb',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: false,
        dicomUploadEnabled: true,
        omitQuotationForMultipartRequest: true,
        configurationAPI: 'ohif.dataSourceConfigurationAPI.google',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'prod-lab-3',
      configuration: {
        friendlyName: 'Prod Lab 3',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-lab-3/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-lab-3/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-lab-3/dicomWeb',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: false,
        dicomUploadEnabled: true,
        omitQuotationForMultipartRequest: true,
        configurationAPI: 'ohif.dataSourceConfigurationAPI.google',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'maxis-healthcare',
      configuration: {
        friendlyName: 'Maxis Healthcare',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/maxis-healthcare/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/maxis-healthcare/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/maxis-healthcare/dicomWeb',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: false,
        dicomUploadEnabled: true,
        omitQuotationForMultipartRequest: true,
        configurationAPI: 'ohif.dataSourceConfigurationAPI.google',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomwebproxy',
      sourceName: 'dicomwebproxy',
      configuration: {
        friendlyName: 'dicomweb delegating proxy',
        name: 'dicomwebproxy',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
      sourceName: 'dicomjson',
      configuration: {
        friendlyName: 'dicom json',
        name: 'json',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomlocal',
      sourceName: 'dicomlocal',
      configuration: {
        friendlyName: 'dicom local',
      },
    },
  ],
};
