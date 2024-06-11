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
