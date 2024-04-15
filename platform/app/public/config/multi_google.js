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
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'paradise-lab',
      configuration: {
        friendlyName: 'Paradise Lab',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/paradise-lab/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/paradise-lab/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/paradise-lab/dicomWeb',
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
      sourceName: 'medcare-diagnostics',
      configuration: {
        friendlyName: 'Medcare Institute Of Diagnostics',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/medcare-diagnostics/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/medcare-diagnostics/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/medcare-diagnostics/dicomWeb',
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
      sourceName: 'shalby-hospitals',
      configuration: {
        friendlyName: 'Shalby Multi-Speciality Hospitals',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/shalby-hospitals/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/shalby-hospitals/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/shalby-hospitals/dicomWeb',
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
      sourceName: 'unicare-hospital',
      configuration: {
        friendlyName: 'Unicare Hospital',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/unicare-hospital/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/unicare-hospital/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/unicare-hospital/dicomWeb',
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
      sourceName: 'qscan-diagnostics',
      configuration: {
        friendlyName: 'QScan Diagnostics',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/qscan-diagnostics/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/qscan-diagnostics/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/qscan-diagnostics/dicomWeb',
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
      sourceName: 'prod-dicom-store-uk',
      configuration: {
        friendlyName: 'Prod UK',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-dicom-store/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-dicom-store/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-dicom-store/dicomWeb',
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
      sourceName: 'texas-hospital',
      configuration: {
        friendlyName: 'Texas Hospital',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/texas-hospital/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/texas-hospital/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/texas-hospital/dicomWeb',
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
      sourceName: 'jinkushal-hospital',
      configuration: {
        friendlyName: 'Jinkushal Cardiac Care and Superspeciality Hospital',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/jinkushal-hospital/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/jinkushal-hospital/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/jinkushal-hospital/dicomWeb',
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
      sourceName: 'mittal-imaging',
      configuration: {
        friendlyName: 'Mittal Imaging Centre',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/mittal-imaging/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/mittal-imaging/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/mittal-imaging/dicomWeb',
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
      sourceName: 'quantum-imaging',
      configuration: {
        friendlyName: 'Quantum Hi Tech Imaging',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/quantum-imaging/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/quantum-imaging/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/quantum-imaging/dicomWeb',
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
      sourceName: 'tesla-imaging',
      configuration: {
        friendlyName: 'Tesla hi tech imaging center',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/tesla-imaging/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/tesla-imaging/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/tesla-imaging/dicomWeb',
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
      sourceName: 'param-diagnostics',
      configuration: {
        friendlyName: 'PARAM DIAGNOSTIC CENTRE PVT. LTD',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/param-diagnostics/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/param-diagnostics/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/param-diagnostics/dicomWeb',
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
      sourceName: 'meditech-hospital',
      configuration: {
        friendlyName: 'Meditech Hospital',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/meditech-hospital/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/meditech-hospital/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/meditech-hospital/dicomWeb',
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
