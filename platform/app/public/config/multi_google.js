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
      sourceName: 'prod-store-nlu98',
      configuration: {
        friendlyName: 'prod-store-nlu98',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nlu98/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nlu98/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nlu98/dicomWeb',
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
      sourceName: 'iep-prod-store-uk',
      configuration: {
        friendlyName: 'IEP UK',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/iep-prod-store/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/iep-prod-store/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/iep-prod-store/dicomWeb',
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
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'srv-hospital',
      configuration: {
        friendlyName: 'SRV Hospital',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/srv-hospital/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/srv-hospital/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/srv-hospital/dicomWeb',
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
      sourceName: 'aadicura-hospital',
      configuration: {
        friendlyName: 'Aadicura superspeciality Hospital',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/aadicura-hospital/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/aadicura-hospital/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/aadicura-hospital/dicomWeb',
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
      sourceName: 'prod-store-xlpwi',
      configuration: {
        friendlyName: 'prod-store-xlpwi',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xlpwi/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xlpwi/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xlpwi/dicomWeb',
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
      sourceName: 'prod-store-krir2',
      configuration: {
        friendlyName: 'prod-store-krir2',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-krir2/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-krir2/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-krir2/dicomWeb',
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
      sourceName: 'prod-store-6wvgo',
      configuration: {
        friendlyName: 'prod-store-6wvgo',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6wvgo/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6wvgo/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6wvgo/dicomWeb',
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
      sourceName: 'prod-store-w7wux',
      configuration: {
        friendlyName: 'prod-store-w7wux',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-w7wux/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-w7wux/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-w7wux/dicomWeb',
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
      sourceName: 'prod-store-cqez1',
      configuration: {
        friendlyName: 'prod-store-cqez1',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cqez1/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cqez1/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cqez1/dicomWeb',
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
      sourceName: 'prod-store-cpo7t',
      configuration: {
        friendlyName: 'prod-store-cpo7t',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cpo7t/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cpo7t/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cpo7t/dicomWeb',
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
      sourceName: 'prod-store-7vg9i',
      configuration: {
        friendlyName: 'prod-store-7vg9i',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7vg9i/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7vg9i/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7vg9i/dicomWeb',
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
      sourceName: 'prod-store-gheao',
      configuration: {
        friendlyName: 'prod-store-gheao',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gheao/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gheao/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gheao/dicomWeb',
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
      sourceName: 'prod-store-xjfai',
      configuration: {
        friendlyName: 'prod-store-xjfai',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xjfai/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xjfai/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xjfai/dicomWeb',
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
      sourceName: 'prod-store-irnqa',
      configuration: {
        friendlyName: 'prod-store-irnqa',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-irnqa/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-irnqa/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-irnqa/dicomWeb',
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
      sourceName: 'prod-store-uk7xk',
      configuration: {
        friendlyName: 'prod-store-uk7xk',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-uk7xk/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-uk7xk/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-uk7xk/dicomWeb',
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
      sourceName: 'prod-store-htwsh',
      configuration: {
        friendlyName: 'prod-store-htwsh',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-htwsh/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-htwsh/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-htwsh/dicomWeb',
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
      sourceName: 'prod-store-8itaa',
      configuration: {
        friendlyName: 'prod-store-8itaa',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8itaa/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8itaa/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8itaa/dicomWeb',
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
      sourceName: 'prod-store-7trjh',
      configuration: {
        friendlyName: 'prod-store-7trjh',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7trjh/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7trjh/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7trjh/dicomWeb',
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
      sourceName: 'prod-store-eflhc',
      configuration: {
        friendlyName: 'prod-store-eflhc',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-eflhc/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-eflhc/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-eflhc/dicomWeb',
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
      sourceName: 'prod-store-egc9b',
      configuration: {
        friendlyName: 'prod-store-egc9b',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-egc9b/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-egc9b/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-egc9b/dicomWeb',
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
      sourceName: 'prod-store-esvgm',
      configuration: {
        friendlyName: 'prod-store-esvgm',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-esvgm/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-esvgm/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-esvgm/dicomWeb',
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
      sourceName: 'prod-store-gkmqw',
      configuration: {
        friendlyName: 'prod-store-gkmqw',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-gkmqw/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-gkmqw/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-gkmqw/dicomWeb',
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
      sourceName: 'prod-store-hbptx',
      configuration: {
        friendlyName: 'prod-store-hbptx',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-hbptx/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-hbptx/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/europe-west2/datasets/fhir_prod_dataset/dicomStores/prod-store-hbptx/dicomWeb',
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
      sourceName: 'default-store',
      configuration: {
        friendlyName: 'default-store',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/default-store/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/default-store/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/default-store/dicomWeb',
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
      sourceName: 'prod-store-jmwc9',
      configuration: {
        friendlyName: 'prod-store-jmwc9',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jmwc9/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jmwc9/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jmwc9/dicomWeb',
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
      sourceName: 'akashtest1-1',
      configuration: {
        friendlyName: 'akashtest1-1',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/akashtest1-1/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/akashtest1-1/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/akashtest1-1/dicomWeb',
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
      sourceName: 'prod-store-zejpf',
      configuration: {
        friendlyName: 'prod-store-zejpf',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zejpf/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zejpf/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zejpf/dicomWeb',
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
      sourceName: 'prod-store-kxwfa',
      configuration: {
        friendlyName: 'prod-store-kxwfa',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kxwfa/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kxwfa/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kxwfa/dicomWeb',
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
      sourceName: 'prod-store-w3knk',
      configuration: {
        friendlyName: 'prod-store-w3knk',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-w3knk/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-w3knk/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-w3knk/dicomWeb',
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
      sourceName: 'prod-store-ha58a',
      configuration: {
        friendlyName: 'prod-store-ha58a',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ha58a/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ha58a/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ha58a/dicomWeb',
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
      sourceName: 'prod-store-9nptb',
      configuration: {
        friendlyName: 'prod-store-9nptb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-9nptb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-9nptb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-9nptb/dicomWeb',
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
      sourceName: 'prod-store-j0fqg',
      configuration: {
        friendlyName: 'prod-store-j0fqg',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-j0fqg/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-j0fqg/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-j0fqg/dicomWeb',
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
      sourceName: 'prod-store-3hdoj',
      configuration: {
        friendlyName: 'prod-store-3hdoj',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-3hdoj/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-3hdoj/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-3hdoj/dicomWeb',
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
      sourceName: 'prod-store-1hrwr',
      configuration: {
        friendlyName: 'prod-store-1hrwr',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1hrwr/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1hrwr/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1hrwr/dicomWeb',
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
      sourceName: 'prod-store-8gnzn',
      configuration: {
        friendlyName: 'prod-store-8gnzn',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8gnzn/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8gnzn/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8gnzn/dicomWeb',
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
      sourceName: 'prod-store-pbykn',
      configuration: {
        friendlyName: 'prod-store-pbykn',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pbykn/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pbykn/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pbykn/dicomWeb',
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
      sourceName: 'prod-store-mdbgp',
      configuration: {
        friendlyName: 'prod-store-mdbgp',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mdbgp/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mdbgp/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mdbgp/dicomWeb',
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
      sourceName: 'prod-store-wpq9y',
      configuration: {
        friendlyName: 'prod-store-wpq9y',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wpq9y/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wpq9y/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wpq9y/dicomWeb',
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
      sourceName: 'prod-store-kpmta',
      configuration: {
        friendlyName: 'prod-store-kpmta',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kpmta/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kpmta/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kpmta/dicomWeb',
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
      sourceName: 'prod-store-g74g4',
      configuration: {
        friendlyName: 'prod-store-g74g4',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-g74g4/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-g74g4/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-g74g4/dicomWeb',
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
      sourceName: 'prod-store-bgzkr',
      configuration: {
        friendlyName: 'prod-store-bgzkr',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-bgzkr/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-bgzkr/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-bgzkr/dicomWeb',
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
      sourceName: 'prod-store-zyef7',
      configuration: {
        friendlyName: 'prod-store-zyef7',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zyef7/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zyef7/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zyef7/dicomWeb',
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
      sourceName: 'prod-store-fufcw',
      configuration: {
        friendlyName: 'prod-store-fufcw',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-fufcw/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-fufcw/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-fufcw/dicomWeb',
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
      sourceName: 'prod-store-6i7ip',
      configuration: {
        friendlyName: 'prod-store-6i7ip',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6i7ip/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6i7ip/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6i7ip/dicomWeb',
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
      sourceName: 'prod-store-52rac',
      configuration: {
        friendlyName: 'prod-store-52rac',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-52rac/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-52rac/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-52rac/dicomWeb',
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
      sourceName: 'prod-store-d6wqg',
      configuration: {
        friendlyName: 'prod-store-d6wqg',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-d6wqg/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-d6wqg/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-d6wqg/dicomWeb',
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
      sourceName: 'prod-store-zj4ps',
      configuration: {
        friendlyName: 'prod-store-zj4ps',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zj4ps/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zj4ps/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zj4ps/dicomWeb',
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
      sourceName: 'prod-store-xlhu8',
      configuration: {
        friendlyName: 'prod-store-xlhu8',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xlhu8/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xlhu8/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xlhu8/dicomWeb',
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
      sourceName: 'prod-store-rgfjb',
      configuration: {
        friendlyName: 'prod-store-rgfjb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rgfjb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rgfjb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rgfjb/dicomWeb',
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
      sourceName: 'prod-store-n2ydt',
      configuration: {
        friendlyName: 'prod-store-n2ydt',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n2ydt/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n2ydt/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n2ydt/dicomWeb',
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
      sourceName: 'prod-store-cmkri',
      configuration: {
        friendlyName: 'prod-store-cmkri',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cmkri/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cmkri/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cmkri/dicomWeb',
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
      sourceName: 'prod-store-m2gae',
      configuration: {
        friendlyName: 'prod-store-m2gae',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-m2gae/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-m2gae/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-m2gae/dicomWeb',
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
      sourceName: 'prod-store-zvu4g',
      configuration: {
        friendlyName: 'prod-store-zvu4g',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zvu4g/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zvu4g/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zvu4g/dicomWeb',
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
      sourceName: 'prod-store-ld7b8',
      configuration: {
        friendlyName: 'prod-store-ld7b8',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ld7b8/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ld7b8/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ld7b8/dicomWeb',
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
      sourceName: 'prod-store-xcuvn',
      configuration: {
        friendlyName: 'prod-store-xcuvn',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xcuvn/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xcuvn/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xcuvn/dicomWeb',
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
      sourceName: 'prod-store-dedto',
      configuration: {
        friendlyName: 'prod-store-dedto',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dedto/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dedto/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dedto/dicomWeb',
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
      sourceName: 'prod-store-ynpsw',
      configuration: {
        friendlyName: 'prod-store-ynpsw',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ynpsw/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ynpsw/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ynpsw/dicomWeb',
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
      sourceName: 'prod-store-cnes5',
      configuration: {
        friendlyName: 'prod-store-cnes5',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cnes5/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cnes5/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cnes5/dicomWeb',
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
      sourceName: 'prod-store-boz0i',
      configuration: {
        friendlyName: 'prod-store-boz0i',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-boz0i/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-boz0i/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-boz0i/dicomWeb',
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
      sourceName: 'prod-store-ogs20',
      configuration: {
        friendlyName: 'prod-store-ogs20',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ogs20/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ogs20/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ogs20/dicomWeb',
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
      sourceName: 'prod-store-aykgb',
      configuration: {
        friendlyName: 'prod-store-aykgb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aykgb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aykgb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aykgb/dicomWeb',
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
      sourceName: 'prod-store-4g2d3',
      configuration: {
        friendlyName: 'prod-store-4g2d3',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-4g2d3/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-4g2d3/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-4g2d3/dicomWeb',
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
      sourceName: 'prod-store-jztzp',
      configuration: {
        friendlyName: 'prod-store-jztzp',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jztzp/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jztzp/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jztzp/dicomWeb',
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
      sourceName: 'prod-store-ckgas',
      configuration: {
        friendlyName: 'prod-store-ckgas',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ckgas/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ckgas/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ckgas/dicomWeb',
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
      sourceName: 'prod-store-ippfj',
      configuration: {
        friendlyName: 'prod-store-ippfj',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ippfj/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ippfj/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ippfj/dicomWeb',
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
      sourceName: 'prod-store-uxs4z',
      configuration: {
        friendlyName: 'prod-store-uxs4z',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-uxs4z/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-uxs4z/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-uxs4z/dicomWeb',
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
      sourceName: 'prod-store-aow6n',
      configuration: {
        friendlyName: 'prod-store-aow6n',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aow6n/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aow6n/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aow6n/dicomWeb',
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
      sourceName: 'prod-store-f14fy',
      configuration: {
        friendlyName: 'prod-store-f14fy',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-f14fy/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-f14fy/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-f14fy/dicomWeb',
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
      sourceName: 'prod-store-oh1km',
      configuration: {
        friendlyName: 'prod-store-oh1km',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oh1km/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oh1km/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oh1km/dicomWeb',
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
      sourceName: 'prod-store-3mqyy',
      configuration: {
        friendlyName: 'prod-store-3mqyy',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-3mqyy/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-3mqyy/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-3mqyy/dicomWeb',
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
      sourceName: 'prod-store-n6nlg',
      configuration: {
        friendlyName: 'prod-store-n6nlg',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n6nlg/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n6nlg/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n6nlg/dicomWeb',
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
      sourceName: 'prod-store-ebejq',
      configuration: {
        friendlyName: 'prod-store-ebejq',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ebejq/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ebejq/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ebejq/dicomWeb',
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
      sourceName: 'prod-store-iyfvw',
      configuration: {
        friendlyName: 'prod-store-iyfvw',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-iyfvw/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-iyfvw/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-iyfvw/dicomWeb',
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
      sourceName: 'prod-store-tdkvl',
      configuration: {
        friendlyName: 'prod-store-tdkvl',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tdkvl/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tdkvl/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tdkvl/dicomWeb',
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
      sourceName: 'prod-store-ije3l',
      configuration: {
        friendlyName: 'prod-store-ije3l',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ije3l/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ije3l/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ije3l/dicomWeb',
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
      sourceName: 'prod-store-ek8ye',
      configuration: {
        friendlyName: 'prod-store-ek8ye',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ek8ye/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ek8ye/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ek8ye/dicomWeb',
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
      sourceName: 'prod-store-leu5x',
      configuration: {
        friendlyName: 'prod-store-leu5x',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-leu5x/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-leu5x/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-leu5x/dicomWeb',
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
      sourceName: 'prod-store-ioqsj',
      configuration: {
        friendlyName: 'prod-store-ioqsj',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ioqsj/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ioqsj/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ioqsj/dicomWeb',
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
      sourceName: 'prod-store-snzlo',
      configuration: {
        friendlyName: 'prod-store-snzlo',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-snzlo/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-snzlo/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-snzlo/dicomWeb',
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
      sourceName: 'prod-store-tarst',
      configuration: {
        friendlyName: 'prod-store-tarst',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tarst/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tarst/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tarst/dicomWeb',
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
      sourceName: 'prod-store-ygpsc',
      configuration: {
        friendlyName: 'prod-store-ygpsc',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ygpsc/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ygpsc/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ygpsc/dicomWeb',
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
      sourceName: 'prod-store-ofc69',
      configuration: {
        friendlyName: 'prod-store-ofc69',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ofc69/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ofc69/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ofc69/dicomWeb',
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
      sourceName: 'prod-store-zv5zo',
      configuration: {
        friendlyName: 'prod-store-zv5zo',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zv5zo/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zv5zo/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zv5zo/dicomWeb',
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
      sourceName: 'prod-store-hfori',
      configuration: {
        friendlyName: 'prod-store-hfori',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hfori/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hfori/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hfori/dicomWeb',
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
      sourceName: 'prod-store-8fnvc',
      configuration: {
        friendlyName: 'prod-store-8fnvc',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8fnvc/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8fnvc/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8fnvc/dicomWeb',
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
      sourceName: 'prod-store-wue3o',
      configuration: {
        friendlyName: 'prod-store-wue3o',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wue3o/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wue3o/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wue3o/dicomWeb',
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
      sourceName: 'prod-store-y3kqd',
      configuration: {
        friendlyName: 'prod-store-y3kqd',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-y3kqd/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-y3kqd/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-y3kqd/dicomWeb',
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
      sourceName: 'prod-store-alvco',
      configuration: {
        friendlyName: 'prod-store-alvco',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-alvco/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-alvco/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-alvco/dicomWeb',
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
      sourceName: 'prod-store-ph4fp',
      configuration: {
        friendlyName: 'prod-store-ph4fp',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ph4fp/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ph4fp/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ph4fp/dicomWeb',
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
      sourceName: 'prod-store-zykjb',
      configuration: {
        friendlyName: 'prod-store-zykjb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zykjb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zykjb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zykjb/dicomWeb',
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
      sourceName: 'prod-store-ylryn',
      configuration: {
        friendlyName: 'prod-store-ylryn',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ylryn/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ylryn/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ylryn/dicomWeb',
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
      sourceName: 'prod-store-6ajlm',
      configuration: {
        friendlyName: 'prod-store-6ajlm',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6ajlm/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6ajlm/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6ajlm/dicomWeb',
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
      sourceName: 'prod-store-g54su',
      configuration: {
        friendlyName: 'prod-store-g54su',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-g54su/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-g54su/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-g54su/dicomWeb',
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
      sourceName: 'prod-store-attxy',
      configuration: {
        friendlyName: 'prod-store-attxy',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-attxy/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-attxy/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-attxy/dicomWeb',
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
      sourceName: 'prod-store-vibmu',
      configuration: {
        friendlyName: 'prod-store-vibmu',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vibmu/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vibmu/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vibmu/dicomWeb',
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
      sourceName: 'prod-store-gsmgu',
      configuration: {
        friendlyName: 'prod-store-gsmgu',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gsmgu/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gsmgu/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gsmgu/dicomWeb',
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
      sourceName: 'prod-store-cjmbq',
      configuration: {
        friendlyName: 'prod-store-cjmbq',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cjmbq/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cjmbq/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cjmbq/dicomWeb',
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
      sourceName: 'prod-store-d1hnb',
      configuration: {
        friendlyName: 'prod-store-d1hnb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-d1hnb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-d1hnb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-d1hnb/dicomWeb',
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
      sourceName: 'prod-store-nec6s',
      configuration: {
        friendlyName: 'prod-store-nec6s',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nec6s/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nec6s/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nec6s/dicomWeb',
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
      sourceName: 'prod-store-enzvk',
      configuration: {
        friendlyName: 'prod-store-enzvk',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-enzvk/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-enzvk/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-enzvk/dicomWeb',
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
      sourceName: 'prod-store-xmixl',
      configuration: {
        friendlyName: 'prod-store-xmixl',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xmixl/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xmixl/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xmixl/dicomWeb',
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
      sourceName: 'prod-store-dvlqd',
      configuration: {
        friendlyName: 'prod-store-dvlqd',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dvlqd/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dvlqd/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dvlqd/dicomWeb',
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
      sourceName: 'prod-store-sopeo',
      configuration: {
        friendlyName: 'prod-store-sopeo',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sopeo/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sopeo/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sopeo/dicomWeb',
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
      sourceName: 'prod-store-cldrb',
      configuration: {
        friendlyName: 'prod-store-cldrb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cldrb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cldrb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cldrb/dicomWeb',
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
      sourceName: 'prod-store-7ntjh',
      configuration: {
        friendlyName: 'prod-store-7ntjh',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7ntjh/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7ntjh/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7ntjh/dicomWeb',
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
      sourceName: 'prod-store-iolnc',
      configuration: {
        friendlyName: 'prod-store-iolnc',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-iolnc/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-iolnc/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-iolnc/dicomWeb',
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
      sourceName: 'prod-store-knpho',
      configuration: {
        friendlyName: 'prod-store-knpho',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-knpho/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-knpho/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-knpho/dicomWeb',
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
      sourceName: 'prod-store-vpjxb',
      configuration: {
        friendlyName: 'prod-store-vpjxb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vpjxb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vpjxb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vpjxb/dicomWeb',
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
      sourceName: 'prod-store-t3ssj',
      configuration: {
        friendlyName: 'prod-store-t3ssj',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-t3ssj/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-t3ssj/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-t3ssj/dicomWeb',
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
      sourceName: 'prod-store-vmtv4',
      configuration: {
        friendlyName: 'prod-store-vmtv4',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vmtv4/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vmtv4/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vmtv4/dicomWeb',
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
      sourceName: 'prod-store-ycmjv',
      configuration: {
        friendlyName: 'prod-store-ycmjv',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ycmjv/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ycmjv/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ycmjv/dicomWeb',
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
      sourceName: 'prod-store-jyhvq',
      configuration: {
        friendlyName: 'prod-store-jyhvq',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jyhvq/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jyhvq/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jyhvq/dicomWeb',
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
      sourceName: 'prod-store-kmguh',
      configuration: {
        friendlyName: 'prod-store-kmguh',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kmguh/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kmguh/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kmguh/dicomWeb',
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
      sourceName: 'prod-store-i2lpi',
      configuration: {
        friendlyName: 'prod-store-i2lpi',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-i2lpi/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-i2lpi/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-i2lpi/dicomWeb',
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
      sourceName: 'prod-store-pw4jv',
      configuration: {
        friendlyName: 'prod-store-pw4jv',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pw4jv/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pw4jv/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pw4jv/dicomWeb',
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
      sourceName: 'prod-store-5cl1f',
      configuration: {
        friendlyName: 'prod-store-5cl1f',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5cl1f/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5cl1f/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5cl1f/dicomWeb',
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
      sourceName: 'prod-store-yzwib',
      configuration: {
        friendlyName: 'prod-store-yzwib',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-yzwib/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-yzwib/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-yzwib/dicomWeb',
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
      sourceName: 'prod-store-xksjo',
      configuration: {
        friendlyName: 'prod-store-xksjo',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xksjo/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xksjo/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xksjo/dicomWeb',
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
      sourceName: 'prod-store-l8jaq',
      configuration: {
        friendlyName: 'prod-store-l8jaq',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-l8jaq/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-l8jaq/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-l8jaq/dicomWeb',
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
      sourceName: 'prod-store-blh9z',
      configuration: {
        friendlyName: 'prod-store-blh9z',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-blh9z/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-blh9z/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-blh9z/dicomWeb',
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
      sourceName: 'prod-store-7b6y5',
      configuration: {
        friendlyName: 'prod-store-7b6y5',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7b6y5/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7b6y5/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7b6y5/dicomWeb',
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
      sourceName: 'prod-store-hr5wb',
      configuration: {
        friendlyName: 'prod-store-hr5wb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hr5wb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hr5wb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hr5wb/dicomWeb',
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
      sourceName: 'prod-store-ykbtr',
      configuration: {
        friendlyName: 'prod-store-ykbtr',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ykbtr/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ykbtr/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ykbtr/dicomWeb',
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
      sourceName: 'prod-store-emgwu',
      configuration: {
        friendlyName: 'prod-store-emgwu',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-emgwu/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-emgwu/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-emgwu/dicomWeb',
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
      sourceName: 'prod-store-hycsu',
      configuration: {
        friendlyName: 'prod-store-hycsu',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hycsu/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hycsu/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hycsu/dicomWeb',
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
      sourceName: 'prod-store-r1mfp',
      configuration: {
        friendlyName: 'prod-store-r1mfp',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-r1mfp/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-r1mfp/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-r1mfp/dicomWeb',
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
      sourceName: 'prod-store-frsp7',
      configuration: {
        friendlyName: 'prod-store-frsp7',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-frsp7/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-frsp7/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-frsp7/dicomWeb',
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
      sourceName: 'prod-store-xdtg6',
      configuration: {
        friendlyName: 'prod-store-xdtg6',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xdtg6/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xdtg6/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xdtg6/dicomWeb',
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
      sourceName: 'prod-store-pxjol',
      configuration: {
        friendlyName: 'prod-store-pxjol',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pxjol/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pxjol/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pxjol/dicomWeb',
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
      sourceName: 'prod-store-r8xeh',
      configuration: {
        friendlyName: 'prod-store-r8xeh',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-r8xeh/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-r8xeh/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-r8xeh/dicomWeb',
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
      sourceName: 'prod-store-lvf6u',
      configuration: {
        friendlyName: 'prod-store-lvf6u',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-lvf6u/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-lvf6u/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-lvf6u/dicomWeb',
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
      sourceName: 'prod-store-tdaid',
      configuration: {
        friendlyName: 'prod-store-tdaid',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tdaid/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tdaid/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tdaid/dicomWeb',
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
      sourceName: 'prod-store-n5lqf',
      configuration: {
        friendlyName: 'prod-store-n5lqf',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n5lqf/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n5lqf/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n5lqf/dicomWeb',
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
      sourceName: 'prod-store-jqasu',
      configuration: {
        friendlyName: 'prod-store-jqasu',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jqasu/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jqasu/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jqasu/dicomWeb',
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
      sourceName: 'prod-store-mz57y',
      configuration: {
        friendlyName: 'prod-store-mz57y',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mz57y/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mz57y/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mz57y/dicomWeb',
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
      sourceName: 'prod-store-av5b3',
      configuration: {
        friendlyName: 'prod-store-av5b3',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-av5b3/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-av5b3/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-av5b3/dicomWeb',
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
      sourceName: 'prod-store-4o9bs',
      configuration: {
        friendlyName: 'prod-store-4o9bs',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-4o9bs/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-4o9bs/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-4o9bs/dicomWeb',
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
      sourceName: 'prod-store-oyk8m',
      configuration: {
        friendlyName: 'prod-store-oyk8m',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oyk8m/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oyk8m/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oyk8m/dicomWeb',
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
      sourceName: 'prod-store-2i1hn',
      configuration: {
        friendlyName: 'prod-store-2i1hn',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-2i1hn/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-2i1hn/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-2i1hn/dicomWeb',
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
      sourceName: 'prod-store-1eu5o',
      configuration: {
        friendlyName: 'prod-store-1eu5o',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1eu5o/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1eu5o/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1eu5o/dicomWeb',
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
      sourceName: 'prod-store-nzek4',
      configuration: {
        friendlyName: 'prod-store-nzek4',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nzek4/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nzek4/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nzek4/dicomWeb',
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
      sourceName: 'prod-store-jyct0',
      configuration: {
        friendlyName: 'prod-store-jyct0',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jyct0/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jyct0/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jyct0/dicomWeb',
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
      sourceName: 'prod-store-74x9l',
      configuration: {
        friendlyName: 'prod-store-74x9l',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-74x9l/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-74x9l/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-74x9l/dicomWeb',
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
      sourceName: 'prod-store-qra9h',
      configuration: {
        friendlyName: 'prod-store-qra9h',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-qra9h/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-qra9h/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-qra9h/dicomWeb',
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
      sourceName: 'prod-store-rhhzr',
      configuration: {
        friendlyName: 'prod-store-rhhzr',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rhhzr/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rhhzr/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rhhzr/dicomWeb',
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
      sourceName: 'prod-store-rcfjb',
      configuration: {
        friendlyName: 'prod-store-rcfjb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rcfjb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rcfjb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rcfjb/dicomWeb',
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
      sourceName: 'prod-store-g4ovb',
      configuration: {
        friendlyName: 'prod-store-g4ovb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-g4ovb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-g4ovb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-g4ovb/dicomWeb',
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
      sourceName: 'prod-store-5pbeb',
      configuration: {
        friendlyName: 'prod-store-5pbeb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5pbeb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5pbeb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5pbeb/dicomWeb',
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
      sourceName: 'prod-store-cubjc',
      configuration: {
        friendlyName: 'prod-store-cubjc',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cubjc/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cubjc/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cubjc/dicomWeb',
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
      sourceName: 'prod-store-x3tot',
      configuration: {
        friendlyName: 'prod-store-x3tot',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-x3tot/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-x3tot/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-x3tot/dicomWeb',
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
      sourceName: 'prod-store-9awvw',
      configuration: {
        friendlyName: 'prod-store-9awvw',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-9awvw/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-9awvw/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-9awvw/dicomWeb',
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
      sourceName: 'prod-store-dtgns',
      configuration: {
        friendlyName: 'prod-store-dtgns',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dtgns/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dtgns/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dtgns/dicomWeb',
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
      sourceName: 'prod-store-hfiit',
      configuration: {
        friendlyName: 'prod-store-hfiit',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hfiit/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hfiit/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hfiit/dicomWeb',
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
      sourceName: 'prod-store-z4gqe',
      configuration: {
        friendlyName: 'prod-store-z4gqe',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-z4gqe/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-z4gqe/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-z4gqe/dicomWeb',
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
      sourceName: 'prod-store-x3xfj',
      configuration: {
        friendlyName: 'prod-store-x3xfj',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-x3xfj/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-x3xfj/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-x3xfj/dicomWeb',
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
      sourceName: 'prod-store-cj19o',
      configuration: {
        friendlyName: 'prod-store-cj19o',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cj19o/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cj19o/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cj19o/dicomWeb',
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
      sourceName: 'prod-store-kiizo',
      configuration: {
        friendlyName: 'prod-store-kiizo',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kiizo/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kiizo/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kiizo/dicomWeb',
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
      sourceName: 'prod-store-dpstu',
      configuration: {
        friendlyName: 'prod-store-dpstu',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dpstu/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dpstu/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dpstu/dicomWeb',
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
      sourceName: 'prod-store-glumx',
      configuration: {
        friendlyName: 'prod-store-glumx',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-glumx/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-glumx/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-glumx/dicomWeb',
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
      sourceName: 'prod-store-blvwq',
      configuration: {
        friendlyName: 'prod-store-blvwq',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-blvwq/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-blvwq/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-blvwq/dicomWeb',
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
      sourceName: 'prod-store-tjm9n',
      configuration: {
        friendlyName: 'prod-store-tjm9n',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tjm9n/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tjm9n/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tjm9n/dicomWeb',
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
      sourceName: 'prod-store-tcbqw',
      configuration: {
        friendlyName: 'prod-store-tcbqw',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tcbqw/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tcbqw/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tcbqw/dicomWeb',
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
      sourceName: 'prod-store-0cmsu',
      configuration: {
        friendlyName: 'prod-store-0cmsu',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-0cmsu/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-0cmsu/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-0cmsu/dicomWeb',
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
      sourceName: 'prod-store-xb3qy',
      configuration: {
        friendlyName: 'prod-store-xb3qy',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xb3qy/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xb3qy/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xb3qy/dicomWeb',
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
      sourceName: 'prod-store-6wsrm',
      configuration: {
        friendlyName: 'prod-store-6wsrm',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6wsrm/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6wsrm/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6wsrm/dicomWeb',
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
      sourceName: 'prod-store-rnfah',
      configuration: {
        friendlyName: 'prod-store-rnfah',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rnfah/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rnfah/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rnfah/dicomWeb',
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
      sourceName: 'prod-store-ghobb',
      configuration: {
        friendlyName: 'prod-store-ghobb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ghobb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ghobb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ghobb/dicomWeb',
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
      sourceName: 'prod-store-nrkai',
      configuration: {
        friendlyName: 'prod-store-nrkai',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nrkai/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nrkai/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nrkai/dicomWeb',
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
      sourceName: 'prod-store-8hwnu',
      configuration: {
        friendlyName: 'prod-store-8hwnu',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8hwnu/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8hwnu/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8hwnu/dicomWeb',
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
      sourceName: 'prod-store-swomb',
      configuration: {
        friendlyName: 'prod-store-swomb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-swomb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-swomb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-swomb/dicomWeb',
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
      sourceName: 'prod-store-oecxd',
      configuration: {
        friendlyName: 'prod-store-oecxd',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oecxd/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oecxd/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oecxd/dicomWeb',
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
      sourceName: 'prod-store-wteg2',
      configuration: {
        friendlyName: 'prod-store-wteg2',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wteg2/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wteg2/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wteg2/dicomWeb',
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
      sourceName: 'prod-store-gitne',
      configuration: {
        friendlyName: 'prod-store-gitne',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gitne/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gitne/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gitne/dicomWeb',
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
      sourceName: 'prod-store-6ym23',
      configuration: {
        friendlyName: 'prod-store-6ym23',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6ym23/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6ym23/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6ym23/dicomWeb',
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
      sourceName: 'prod-store-spwlb',
      configuration: {
        friendlyName: 'prod-store-spwlb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-spwlb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-spwlb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-spwlb/dicomWeb',
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
      sourceName: 'prod-store-9upou',
      configuration: {
        friendlyName: 'prod-store-9upou',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-9upou/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-9upou/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-9upou/dicomWeb',
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
      sourceName: 'prod-store-6nu7l',
      configuration: {
        friendlyName: 'prod-store-6nu7l',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6nu7l/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6nu7l/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6nu7l/dicomWeb',
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
      sourceName: 'prod-store-8uvh3',
      configuration: {
        friendlyName: 'prod-store-8uvh3',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8uvh3/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8uvh3/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8uvh3/dicomWeb',
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
      sourceName: 'prod-store-ggxjf',
      configuration: {
        friendlyName: 'prod-store-ggxjf',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ggxjf/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ggxjf/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ggxjf/dicomWeb',
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
      sourceName: 'prod-store-86bjp',
      configuration: {
        friendlyName: 'prod-store-86bjp',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-86bjp/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-86bjp/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-86bjp/dicomWeb',
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
      sourceName: 'prod-store-pwamg',
      configuration: {
        friendlyName: 'prod-store-pwamg',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pwamg/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pwamg/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pwamg/dicomWeb',
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
      sourceName: 'prod-store-h2u8j',
      configuration: {
        friendlyName: 'prod-store-h2u8j',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-h2u8j/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-h2u8j/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-h2u8j/dicomWeb',
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
      sourceName: 'prod-store-hrvj6',
      configuration: {
        friendlyName: 'prod-store-hrvj6',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hrvj6/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hrvj6/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hrvj6/dicomWeb',
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
      sourceName: 'prod-store-ou6yj',
      configuration: {
        friendlyName: 'prod-store-ou6yj',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ou6yj/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ou6yj/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ou6yj/dicomWeb',
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
      sourceName: 'prod-store-7kdoi',
      configuration: {
        friendlyName: 'prod-store-7kdoi',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7kdoi/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7kdoi/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7kdoi/dicomWeb',
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
      sourceName: 'prod-store-oub91',
      configuration: {
        friendlyName: 'prod-store-oub91',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oub91/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oub91/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oub91/dicomWeb',
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
      sourceName: 'prod-store-hanrg',
      configuration: {
        friendlyName: 'prod-store-hanrg',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hanrg/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hanrg/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hanrg/dicomWeb',
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
      sourceName: 'prod-store-ptjv1',
      configuration: {
        friendlyName: 'prod-store-ptjv1',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ptjv1/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ptjv1/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ptjv1/dicomWeb',
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
      sourceName: 'prod-store-gj1rs',
      configuration: {
        friendlyName: 'prod-store-gj1rs',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gj1rs/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gj1rs/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-gj1rs/dicomWeb',
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
      sourceName: 'prod-store-mad5d',
      configuration: {
        friendlyName: 'prod-store-mad5d',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mad5d/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mad5d/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mad5d/dicomWeb',
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
      sourceName: 'prod-store-k1wnh',
      configuration: {
        friendlyName: 'prod-store-k1wnh',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-k1wnh/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-k1wnh/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-k1wnh/dicomWeb',
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
      sourceName: 'prod-store-pttd7',
      configuration: {
        friendlyName: 'prod-store-pttd7',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pttd7/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pttd7/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pttd7/dicomWeb',
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
      sourceName: 'prod-store-orrnt',
      configuration: {
        friendlyName: 'prod-store-orrnt',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-orrnt/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-orrnt/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-orrnt/dicomWeb',
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
      sourceName: 'prod-store-civ59',
      configuration: {
        friendlyName: 'prod-store-civ59',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-civ59/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-civ59/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-civ59/dicomWeb',
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
      sourceName: 'prod-store-jdu0t',
      configuration: {
        friendlyName: 'prod-store-jdu0t',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jdu0t/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jdu0t/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jdu0t/dicomWeb',
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
      sourceName: 'prod-store-de7qc',
      configuration: {
        friendlyName: 'prod-store-de7qc',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-de7qc/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-de7qc/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-de7qc/dicomWeb',
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
      sourceName: 'prod-store-msxqa',
      configuration: {
        friendlyName: 'prod-store-msxqa',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-msxqa/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-msxqa/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-msxqa/dicomWeb',
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
      sourceName: 'prod-store-ww6ev',
      configuration: {
        friendlyName: 'prod-store-ww6ev',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ww6ev/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ww6ev/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ww6ev/dicomWeb',
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
      sourceName: 'prod-store-c7pqn',
      configuration: {
        friendlyName: 'prod-store-c7pqn',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-c7pqn/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-c7pqn/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-c7pqn/dicomWeb',
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
      sourceName: 'prod-store-ge5ad',
      configuration: {
        friendlyName: 'prod-store-ge5ad',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ge5ad/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ge5ad/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ge5ad/dicomWeb',
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
      sourceName: 'prod-store-5lgno',
      configuration: {
        friendlyName: 'prod-store-5lgno',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5lgno/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5lgno/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5lgno/dicomWeb',
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
      sourceName: 'prod-store-s21wm',
      configuration: {
        friendlyName: 'prod-store-s21wm',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-s21wm/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-s21wm/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-s21wm/dicomWeb',
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
      sourceName: 'prod-store-d3lgq',
      configuration: {
        friendlyName: 'prod-store-d3lgq',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-d3lgq/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-d3lgq/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-d3lgq/dicomWeb',
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
      sourceName: 'prod-store-ihodw',
      configuration: {
        friendlyName: 'prod-store-ihodw',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ihodw/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ihodw/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ihodw/dicomWeb',
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
      sourceName: 'prod-store-pe3gh',
      configuration: {
        friendlyName: 'prod-store-pe3gh',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pe3gh/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pe3gh/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pe3gh/dicomWeb',
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
      sourceName: 'prod-store-69hvl',
      configuration: {
        friendlyName: 'prod-store-69hvl',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-69hvl/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-69hvl/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-69hvl/dicomWeb',
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
      sourceName: 'prod-store-kenfp',
      configuration: {
        friendlyName: 'prod-store-kenfp',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kenfp/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kenfp/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kenfp/dicomWeb',
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
      sourceName: 'prod-store-zcmsd',
      configuration: {
        friendlyName: 'prod-store-zcmsd',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zcmsd/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zcmsd/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zcmsd/dicomWeb',
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
      sourceName: 'prod-store-hnhyp',
      configuration: {
        friendlyName: 'prod-store-hnhyp',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hnhyp/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hnhyp/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hnhyp/dicomWeb',
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
      sourceName: 'prod-store-zbz87',
      configuration: {
        friendlyName: 'prod-store-zbz87',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zbz87/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zbz87/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zbz87/dicomWeb',
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
      sourceName: 'prod-store-s37gc',
      configuration: {
        friendlyName: 'prod-store-s37gc',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-s37gc/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-s37gc/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-s37gc/dicomWeb',
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
      sourceName: 'prod-store-swym0',
      configuration: {
        friendlyName: 'prod-store-swym0',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-swym0/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-swym0/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-swym0/dicomWeb',
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
      sourceName: 'prod-store-zlikw',
      configuration: {
        friendlyName: 'prod-store-zlikw',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zlikw/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zlikw/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zlikw/dicomWeb',
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
      sourceName: 'prod-store-nhhym',
      configuration: {
        friendlyName: 'prod-store-nhhym',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nhhym/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nhhym/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nhhym/dicomWeb',
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
      sourceName: 'prod-store-mtjit',
      configuration: {
        friendlyName: 'prod-store-mtjit',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mtjit/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mtjit/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mtjit/dicomWeb',
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
      sourceName: 'prod-store-j0iqb',
      configuration: {
        friendlyName: 'prod-store-j0iqb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-j0iqb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-j0iqb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-j0iqb/dicomWeb',
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
      sourceName: 'prod-store-umh96',
      configuration: {
        friendlyName: 'prod-store-umh96',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-umh96/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-umh96/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-umh96/dicomWeb',
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
      sourceName: 'prod-store-clqlu',
      configuration: {
        friendlyName: 'prod-store-clqlu',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-clqlu/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-clqlu/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-clqlu/dicomWeb',
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
      sourceName: 'prod-store-hkbz9',
      configuration: {
        friendlyName: 'prod-store-hkbz9',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hkbz9/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hkbz9/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hkbz9/dicomWeb',
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
      sourceName: 'prod-store-llgmn',
      configuration: {
        friendlyName: 'prod-store-llgmn',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-llgmn/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-llgmn/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-llgmn/dicomWeb',
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
      sourceName: 'prod-store-alzwl',
      configuration: {
        friendlyName: 'prod-store-alzwl',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-alzwl/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-alzwl/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-alzwl/dicomWeb',
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
      sourceName: 'prod-store-hle0l',
      configuration: {
        friendlyName: 'prod-store-hle0l',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hle0l/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hle0l/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-hle0l/dicomWeb',
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
      sourceName: 'prod-store-ha5up',
      configuration: {
        friendlyName: 'prod-store-ha5up',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ha5up/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ha5up/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ha5up/dicomWeb',
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
      sourceName: 'prod-store-adtd7',
      configuration: {
        friendlyName: 'prod-store-adtd7',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-adtd7/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-adtd7/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-adtd7/dicomWeb',
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
      sourceName: 'prod-store-0dtxf',
      configuration: {
        friendlyName: 'prod-store-0dtxf',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-0dtxf/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-0dtxf/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-0dtxf/dicomWeb',
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
      sourceName: 'prod-store-syzwh',
      configuration: {
        friendlyName: 'prod-store-syzwh',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-syzwh/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-syzwh/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-syzwh/dicomWeb',
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
      sourceName: 'prod-store-aagv3',
      configuration: {
        friendlyName: 'prod-store-aagv3',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aagv3/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aagv3/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aagv3/dicomWeb',
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
      sourceName: 'prod-store-oz2tj',
      configuration: {
        friendlyName: 'prod-store-oz2tj',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oz2tj/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oz2tj/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oz2tj/dicomWeb',
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
      sourceName: 'prod-store-4lyld',
      configuration: {
        friendlyName: 'prod-store-4lyld',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-4lyld/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-4lyld/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-4lyld/dicomWeb',
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
      sourceName: 'prod-store-msqig',
      configuration: {
        friendlyName: 'prod-store-msqig',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-msqig/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-msqig/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-msqig/dicomWeb',
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
      sourceName: 'prod-store-glmbt',
      configuration: {
        friendlyName: 'prod-store-glmbt',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-glmbt/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-glmbt/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-glmbt/dicomWeb',
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
      sourceName: 'prod-store-az5cr',
      configuration: {
        friendlyName: 'prod-store-az5cr',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-az5cr/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-az5cr/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-az5cr/dicomWeb',
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
      sourceName: 'prod-store-oobph',
      configuration: {
        friendlyName: 'prod-store-oobph',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oobph/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oobph/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-oobph/dicomWeb',
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
      sourceName: 'prod-store-wox1u',
      configuration: {
        friendlyName: 'prod-store-wox1u',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wox1u/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wox1u/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wox1u/dicomWeb',
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
      sourceName: 'prod-store-t4q4p',
      configuration: {
        friendlyName: 'prod-store-t4q4p',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-t4q4p/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-t4q4p/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-t4q4p/dicomWeb',
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
      sourceName: 'prod-store-ebryd',
      configuration: {
        friendlyName: 'prod-store-ebryd',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ebryd/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ebryd/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ebryd/dicomWeb',
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
      sourceName: 'prod-store-vebte',
      configuration: {
        friendlyName: 'prod-store-vebte',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vebte/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vebte/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-vebte/dicomWeb',
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
      sourceName: 'prod-store-7cuow',
      configuration: {
        friendlyName: 'prod-store-7cuow',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7cuow/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7cuow/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-7cuow/dicomWeb',
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
      sourceName: 'prod-store-rvyw2',
      configuration: {
        friendlyName: 'prod-store-rvyw2',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rvyw2/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rvyw2/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-rvyw2/dicomWeb',
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
      sourceName: 'prod-store-zmpug',
      configuration: {
        friendlyName: 'prod-store-zmpug',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zmpug/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zmpug/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zmpug/dicomWeb',
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
      sourceName: 'prod-store-nxeau',
      configuration: {
        friendlyName: 'prod-store-nxeau',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nxeau/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nxeau/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-nxeau/dicomWeb',
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
      sourceName: 'prod-store-trd0m',
      configuration: {
        friendlyName: 'prod-store-trd0m',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-trd0m/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-trd0m/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-trd0m/dicomWeb',
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
      sourceName: 'prod-store-ieomg',
      configuration: {
        friendlyName: 'prod-store-ieomg',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ieomg/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ieomg/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ieomg/dicomWeb',
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
      sourceName: 'prod-store-ufkh5',
      configuration: {
        friendlyName: 'prod-store-ufkh5',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ufkh5/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ufkh5/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ufkh5/dicomWeb',
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
      sourceName: 'prod-store-eamsh',
      configuration: {
        friendlyName: 'prod-store-eamsh',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-eamsh/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-eamsh/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-eamsh/dicomWeb',
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
      sourceName: 'prod-store-ebyol',
      configuration: {
        friendlyName: 'prod-store-ebyol',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ebyol/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ebyol/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ebyol/dicomWeb',
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
      sourceName: 'prod-store-6ao5i',
      configuration: {
        friendlyName: 'prod-store-6ao5i',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6ao5i/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6ao5i/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6ao5i/dicomWeb',
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
      sourceName: 'prod-store-pp6u7',
      configuration: {
        friendlyName: 'prod-store-pp6u7',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pp6u7/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pp6u7/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-pp6u7/dicomWeb',
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
      sourceName: 'prod-store-zj6nw',
      configuration: {
        friendlyName: 'prod-store-zj6nw',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zj6nw/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zj6nw/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zj6nw/dicomWeb',
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
      sourceName: 'prod-store-kmzzy',
      configuration: {
        friendlyName: 'prod-store-kmzzy',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kmzzy/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kmzzy/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-kmzzy/dicomWeb',
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
      sourceName: 'prod-store-xb9gm',
      configuration: {
        friendlyName: 'prod-store-xb9gm',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xb9gm/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xb9gm/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xb9gm/dicomWeb',
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
      sourceName: 'prod-store-drxud',
      configuration: {
        friendlyName: 'prod-store-drxud',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-drxud/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-drxud/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-drxud/dicomWeb',
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
      sourceName: 'prod-store-sp0p1',
      configuration: {
        friendlyName: 'prod-store-sp0p1',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sp0p1/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sp0p1/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sp0p1/dicomWeb',
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
      sourceName: 'prod-store-asw7o',
      configuration: {
        friendlyName: 'prod-store-asw7o',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-asw7o/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-asw7o/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-asw7o/dicomWeb',
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
      sourceName: 'prod-store-aba4j',
      configuration: {
        friendlyName: 'prod-store-aba4j',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aba4j/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aba4j/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-aba4j/dicomWeb',
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
      sourceName: 'prod-store-npf8i',
      configuration: {
        friendlyName: 'prod-store-npf8i',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-npf8i/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-npf8i/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-npf8i/dicomWeb',
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
      sourceName: 'prod-store-w1ynk',
      configuration: {
        friendlyName: 'prod-store-w1ynk',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-w1ynk/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-w1ynk/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-w1ynk/dicomWeb',
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
      sourceName: 'prod-store-tqvqq',
      configuration: {
        friendlyName: 'prod-store-tqvqq',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tqvqq/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tqvqq/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tqvqq/dicomWeb',
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
      sourceName: 'prod-store-jtqca',
      configuration: {
        friendlyName: 'prod-store-jtqca',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jtqca/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jtqca/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-jtqca/dicomWeb',
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
      sourceName: 'prod-store-zlvkw',
      configuration: {
        friendlyName: 'prod-store-zlvkw',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zlvkw/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zlvkw/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zlvkw/dicomWeb',
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
      sourceName: 'prod-store-6fk7h',
      configuration: {
        friendlyName: 'prod-store-6fk7h',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6fk7h/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6fk7h/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-6fk7h/dicomWeb',
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
      sourceName: 'prod-store-zjslq',
      configuration: {
        friendlyName: 'prod-store-zjslq',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zjslq/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zjslq/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zjslq/dicomWeb',
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
      sourceName: 'prod-store-mmtej',
      configuration: {
        friendlyName: 'prod-store-mmtej',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mmtej/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mmtej/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-mmtej/dicomWeb',
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
      sourceName: 'prod-store-j0fsm',
      configuration: {
        friendlyName: 'prod-store-j0fsm',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-j0fsm/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-j0fsm/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-j0fsm/dicomWeb',
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
      sourceName: 'prod-store-be5xm',
      configuration: {
        friendlyName: 'prod-store-be5xm',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-be5xm/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-be5xm/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-be5xm/dicomWeb',
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
      sourceName: 'prod-store-29ure',
      configuration: {
        friendlyName: 'prod-store-29ure',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-29ure/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-29ure/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-29ure/dicomWeb',
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
      sourceName: 'prod-store-1m05z',
      configuration: {
        friendlyName: 'prod-store-1m05z',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1m05z/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1m05z/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1m05z/dicomWeb',
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
      sourceName: 'prod-store-i4ync',
      configuration: {
        friendlyName: 'prod-store-i4ync',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-i4ync/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-i4ync/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-i4ync/dicomWeb',
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
      sourceName: 'prod-store-5fps1',
      configuration: {
        friendlyName: 'prod-store-5fps1',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5fps1/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5fps1/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5fps1/dicomWeb',
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
      sourceName: 'prod-store-5txz5',
      configuration: {
        friendlyName: 'prod-store-5txz5',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5txz5/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5txz5/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-5txz5/dicomWeb',
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
      sourceName: 'prod-store-p8cre',
      configuration: {
        friendlyName: 'prod-store-p8cre',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-p8cre/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-p8cre/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-p8cre/dicomWeb',
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
      sourceName: 'prod-store-907gw',
      configuration: {
        friendlyName: 'prod-store-907gw',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-907gw/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-907gw/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-907gw/dicomWeb',
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
      sourceName: 'prod-store-huga5',
      configuration: {
        friendlyName: 'prod-store-huga5',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-huga5/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-huga5/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-huga5/dicomWeb',
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
      sourceName: 'prod-store-xpjdb',
      configuration: {
        friendlyName: 'prod-store-xpjdb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xpjdb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xpjdb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xpjdb/dicomWeb',
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
      sourceName: 'prod-store-uov6w',
      configuration: {
        friendlyName: 'prod-store-uov6w',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-uov6w/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-uov6w/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-uov6w/dicomWeb',
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
      sourceName: 'prod-store-xnhgp',
      configuration: {
        friendlyName: 'prod-store-xnhgp',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xnhgp/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xnhgp/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-xnhgp/dicomWeb',
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
      sourceName: 'prod-store-e1es4',
      configuration: {
        friendlyName: 'prod-store-e1es4',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-e1es4/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-e1es4/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-e1es4/dicomWeb',
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
      sourceName: 'prod-store-cr83m',
      configuration: {
        friendlyName: 'prod-store-cr83m',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cr83m/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cr83m/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-cr83m/dicomWeb',
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
      sourceName: 'prod-store-1lrru',
      configuration: {
        friendlyName: 'prod-store-1lrru',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1lrru/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1lrru/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-1lrru/dicomWeb',
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
      sourceName: 'prod-store-sqynd',
      configuration: {
        friendlyName: 'prod-store-sqynd',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sqynd/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sqynd/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sqynd/dicomWeb',
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
      sourceName: 'prod-store-wpvq1',
      configuration: {
        friendlyName: 'prod-store-wpvq1',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wpvq1/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wpvq1/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wpvq1/dicomWeb',
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
      sourceName: 'prod-store-sykks',
      configuration: {
        friendlyName: 'prod-store-sykks',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sykks/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sykks/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-sykks/dicomWeb',
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
      sourceName: 'prod-store-a529j',
      configuration: {
        friendlyName: 'prod-store-a529j',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-a529j/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-a529j/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-a529j/dicomWeb',
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
      sourceName: 'prod-store-wtoyy',
      configuration: {
        friendlyName: 'prod-store-wtoyy',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wtoyy/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wtoyy/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-wtoyy/dicomWeb',
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
      sourceName: 'prod-store-zcipb',
      configuration: {
        friendlyName: 'prod-store-zcipb',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zcipb/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zcipb/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zcipb/dicomWeb',
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
      sourceName: 'prod-store-r0ne1',
      configuration: {
        friendlyName: 'prod-store-r0ne1',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-r0ne1/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-r0ne1/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-r0ne1/dicomWeb',
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
      sourceName: 'prod-store-8dfj3',
      configuration: {
        friendlyName: 'prod-store-8dfj3',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8dfj3/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8dfj3/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-8dfj3/dicomWeb',
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
      sourceName: 'prod-store-tdiyy',
      configuration: {
        friendlyName: 'prod-store-tdiyy',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tdiyy/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tdiyy/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-tdiyy/dicomWeb',
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
      sourceName: 'prod-store-f3r0b',
      configuration: {
        friendlyName: 'prod-store-f3r0b',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-f3r0b/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-f3r0b/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-f3r0b/dicomWeb',
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
      sourceName: 'prod-store-t2mnt',
      configuration: {
        friendlyName: 'prod-store-t2mnt',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-t2mnt/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-t2mnt/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-t2mnt/dicomWeb',
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
      sourceName: 'prod-store-ivdlh',
      configuration: {
        friendlyName: 'prod-store-ivdlh',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ivdlh/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ivdlh/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-ivdlh/dicomWeb',
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
      sourceName: 'prod-store-extq3',
      configuration: {
        friendlyName: 'prod-store-extq3',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-extq3/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-extq3/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-extq3/dicomWeb',
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
      sourceName: 'prod-store-dbovl',
      configuration: {
        friendlyName: 'prod-store-dbovl',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dbovl/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dbovl/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-dbovl/dicomWeb',
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
      sourceName: 'prod-store-n8nzp',
      configuration: {
        friendlyName: 'prod-store-n8nzp',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n8nzp/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n8nzp/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-n8nzp/dicomWeb',
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
      sourceName: 'prod-store-zvuxp',
      configuration: {
        friendlyName: 'prod-store-zvuxp',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zvuxp/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zvuxp/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-zvuxp/dicomWeb',
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
      sourceName: 'prod-store-lzynl',
      configuration: {
        friendlyName: 'prod-store-lzynl',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-lzynl/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-lzynl/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/prod-heme-platform/locations/asia-south1/datasets/fhir_prod_dataset/dicomStores/prod-store-lzynl/dicomWeb',
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
