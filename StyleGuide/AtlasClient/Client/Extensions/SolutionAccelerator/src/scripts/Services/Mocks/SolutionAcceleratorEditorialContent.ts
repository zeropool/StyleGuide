﻿module Microsoft.DataStudio.SolutionAccelerator.Services.Mocks {
    export class EditorialContent {
        /*
            This code contains all the static design/editorial strings
            These content will be moved out of mocks when we have the proper content service
        */
        /*
            1. Generic Azure Services Nodes
        */
        public static EventHubNodeName = "Azure Event Hub";
        public static EventHubIcon = "Notebooks-01.svg";
        public static EventHubDescription = "Data Ingestion starts with streaming events from the vehicle telematics simulator into Azure Event Hub so Azure Stream Analytics can process and provide real-time insights.";
        public static EventHubDetails = "<p>Azure Event Hubs provides a highly scalable publish-subscribe ingestor that can intake millions of events per second and store or transform/process the data for real-time and batch analytics.</p>"
        + "<p>The events generated by the Vehicle Telematics Simulator is published to an Azure EventHub instance created and configured as part of the deployment. An Azure Stream Analytics job ingests these events from the Event Hub and processes the data as per the queries defined in the job to perform real time analytics and predictions on vehicle health.</p>"
        + "<a = href='https://azure.microsoft.com/en-us/services/event-hubs/' target='blank'>Azure Event Hub</a>";

        public static StreamAnalyticsNodeName = "Azure Stream Analytics";
        public static StreamAnalyticsIcon = "ASA-01.svg";
        public static StreamAnalyticsDescription = "An Azure Stream Analytics job ingests these events from the Event Hub and processes the data as per the queries defined in the job to perform real time analytics and predictions on vehicle health.";
        public static StreamAnalyticsDetails = "<p>Azure Stream Analytics allows real-time stream processing on millions of events with its out of box integration with Event Hubs and also persists the data into Azure blob storage for rich batch analytics.</p>"
        + "<p>This solution showcases both real-time and batch analytics. Real - time analysis is performed using Azure Stream Analytics. Stream Analytics process millions of events in real - time with simple SQL based language.</p>"
        + "<a href ='https://azure.microsoft.com/en-us/services/stream-analytics/' target='blank'>Azure Stream Analytics</a>";

        public static HDInsightNodeName = "Azure HDInsight";
        public static HDInsightIcon = "HD-01.svg";
        public static HDInsightDescription = "Azure HDInsight is used to transform the data at rest in Azure BlobStorage with Hive and Pig queries.";
        public static HDInsightDetails = "<p>Azure HDInsight is an Apache Hadoop distribution powered by the cloud. This means that it handles any amount of data, scaling from terabytes to petabytes on demand.</p>"
        + "<p>In this solution, Azure HDInsight is used to transform the vehicle health and driving pattern data at rest in Azure BlobStorage with Hive and Pig queries. </p>"
        + "<a href='https://azure.microsoft.com/en-us/services/hdinsight/' target= 'blank' >Azure HDInsight</a>";

        public static MachineLearningNodeName = "Azure Machine Learning";
        public static MachineLearningIcon = "ML-01.svg";
        public static MachineLearningDescription = "Azure Machine Learning is leveraged for anomaly detection in real-time and batch processing to gain rich predictive insights.";
        public static MachineLearningDetails = "Azure Machine Learning is a powerful cloud-based predictive analytics service that makes it possible to quickly create and deploy predictive models as analytics solutions. In this solution, we have created and deployed an anomaly detection experiment and operationalizing it in both real-time and batch processing workflows for predictive maintenance. "
        + "<a href='https://azure.microsoft.com/en-us/services/machine-learning/' target= 'blank' >Azure Machine Learning</a>";

        public static AzureSQLNodeName = "Azure SQL";
        public static AzureSQLIcon = "Data-01.svg";
        public static AzureSQLDescription = "Azure SQL is a relational database as a managed service. In this solution, the transformed and processed data both in real-time and batch processing workflows are published to Azure SQL for consumption and visualization in PowerBI.";
        public static AzureSQLDetails = "Azure SQL is a relational database as a managed service. In this solution, the transformed and processed data both in real-time and batch processing workflows are published to Azure SQL for consumption and visualization in PowerBI. "
        + "<a href='https://azure.microsoft.com/en-us/services/sql-data-warehouse/' target= 'blank' >Azure SQL</a>";

        public static BlobStorageNodeName = "Azure Blob Storage";
        public static BlobStorageDetails = "Azure BlobStorage is a low cost persistent cloud storage enabling various analytics scenarios. In this solution, Azure BlobStorage is used as the persistent long term storage to drive rich analytics using HDInsight."
        + "<a href='https://azure.microsoft.com/en-us/services/storage/blobs/' target='blank'>Azure BlobStorage</a>";

        // Updated 2/4/2013 : DG : Resolves issue 5203 pt2 : Text replacement
        public static DataFactoryNodeName = "Azure Data Factory";
        public static DataFactoryIcon = "ADF-01.svg";
        public static DataFactoryDescription = "Azure Data Factory handles orchestration, scheduling, resource management and monitoring of the batch processing pipeline.";
        public static DataFactoryDetails = "The Azure Data Factory service is a fully managed service for composing data storage, processing, and movement services into streamlined, scalable, and reliable data production pipelines. "
        + "In this solution, Azure Data Factory handles orchestration, scheduling, resource management and monitoring of the batch processing pipeline. "
        + "<a href='https://azure.microsoft.com/en-us/services/data-factory/' target='blank'>Azure Data Factory</a>";

        public static PowerBINodeName = "Power BI";
        public static PowerBIIcon = "BI-01.svg";
        public static PowerBIDescription = "Configure and share rich dashboard to gain real-time and predictive insights on vehicle health and driving habits.";

        // 2. connectedcar specific content
        public static ConnectedcarCallToAction = "<div class='resource-header'>Call to action</div><p><b>Click the PowerBI node on the diagram and follow the instructions on the properties pane</b></p>";
        public static ConnectedCarDescription = "<div class='resource-header'>Description</div>"
        + "<p>The Vehicle Telemetry Analytics solution demonstrates how car dealerships, automobile manufacturers and insurance companies can leverage the capabilities of Cortana Analytics to gain real-time and predictive insights on vehicle health and driving habits to drive improvements in the area of customer experience, R&D and marketing campaigns.</p>"
        + "<p>This solution uses two different data sources: Simulated vehicle signals and diagnostic dataset and vehicle catalog and showcases a lambda architecture pattern leveraging various products from the Cortana Analytics Suite like Event Hub, Stream Analytics, Machine Learning, "
        + "Data Factory, Azure BlobStorage, Azure SQL and PowerBI for the end to end real- time and batch analysis with predictions demonstrating the full potential of the Cortana Analytics platform.</p>"
        + "<a href='http://go.microsoft.com/fwlink/?LinkId=708724' target='blank'>Vehicle Telemetry Analytics Playbook</a>";
        // Todo (sbian) - temporary work around before we fully support "call to action"
        public static ConnectedCarOverallDescription = EditorialContent.ConnectedcarCallToAction + '$' + EditorialContent.ConnectedCarDescription;

        public static ConnectedCarVehicleDataNodeName = "Vehicle Telematics Simulator";
        public static ConnectedCarVehicleDataDescription = "The vehicle telematics simulator emits diagnostic information and signals corresponding to the state of the vehicle and driving pattern at a given point in time.";
        public static ConnectedCarVehicleDataDetails = "A vehicle telematics simulator is included and configured as part of this solution. It emits diagnostic information and signals corresponding to the state of the vehicle and driving pattern at a given point in time. "
        + "<ul><li>You need to download the simulator package, unpack and save locally on your machine.</li>"
        + "<li>Once the deployment is completed, execute “CarEventGenerator.exe” from the folder where it is saved.</li>"
        + "<li>Follow the PowerBI dashboard setup instructions and create the visualizations to gain insights</li></ul>";

        public static ConnectedCarCatalogDataNodeName = "Vehicle Catalog Data";
        public static ConnectedCarCatalogDataDescription = "The Vehicle Catalog is a reference dataset containing VIN to model mapping.";
        public static ConnectedCarCatalogDataDetails = "This is a reference dataset that contains VIN (Vehicle Identification Number) to models mapping. This dataset is loaded into the Azure BlobStorage that gets provisioned as part of the deployment in your account. This data is leveraged for both real-time and batch processing. ";

        public static ConnectedCarPowerBIDetails = "<p>Microsoft PowerBI allows to create rich visualization of the data, share and collaborate in new and intuitive ways.</p>"
        + "<p>Follow the steps above to configure a rich dashboard to gain real-time and predictive insights on vehicle health and driving habits.</p>";

        // 3. Predictive Maintenance specific content
        // Updated 2/4/2013 : DG : Resolves issue 5194 : Text replacement
        public static PMOverallDescription = "<div class='resource-header'>Description</div>"
        + "<p> This is an end to end solution for a predictive maintenance use case in the airline industry. "
        + "The green nodes on the left indicate the Azure Services that are deployed to your subscription as part of this solution. "
        + "If you wish to remove this solution from your subscription, click on your solution name in the left panel in this "
        + "UI and use the <b> Delete </b> option from the popup menu.</p>"
        + "<p><div class='resource-header'>Next Steps</div>"
        + "<p>Step 1.  <b>Download the sample data generator application</b>, to start sending simulated data to the Event Hub. "
        + "Click on the Data Generator node to download the application and follow the instructions in the ReadMe file to start the data generator.</p>"
        + "<p>Step 2.  <b>Monitor if data is flowing into your pipeline</b>, by following the instructions in the "
        + "<a href=\"https://azure.microsoft.com/en-us/documentation/articles/cortana-analytics-technical-guide-predictive-maintenance/?rnd=1#strongmonitor-progressstrong\">Technical Guide</a>.</p>" 
        + "<p>Step 3. <b>Read <a href=\"http://azure.microsoft.com/en-us/documentation/articles/cortana-analytics-technical-guide-predictive-maintenance/\">Technical Guide</a></b> for more information.</p>" 
        + "<p>Step 4. Lastly, <b>build your Power BI dashboard</b> using the instructions from the <a href=\"https://azure.microsoft.com/en-us/documentation/articles/cortana-analytics-technical-guide-predictive-maintenance/?rnd=1#strongpower-bi-dashboardstrong\">Technical Guide</a>.</p>"

        // Updated 2/4/2013 : DG : Resolves issue 5192 : Text replacement
        public static PredictiveMaintenanceDataNodeName = "Data Generator - Click 'Open' to download."
        public static PredictiveMaintenanceDataNodeDescription = "Sample data generator for the deployed solution template.";
        public static PredictiveMaintenanceDataNodeDetails = "<p>Download the file PredictiveMaintenanceDataGeneratorv1.0.zip by clicking the above link. "
        + "Unzip the file in a local folder and follow the instructions given in the Readme.txt"
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        // Updated 2/4/2013 : DG : Resolves issue 5197 : Additional spaces
        public static PredictiveMaintenanceEventHubDescription = "Cloud-scale telemetry ingestions from websites, apps and devices. In this solution it collects raw sensor data to be processed by Stream Analytics.";
        public static PredictiveMaintenanceEventHubDetails = "<p>Event Hub collects unstructured raw events data as they arrive "
        + "from the data generator (data is produced at least once every second in this case) to be processed by Stream "
        + "Analytics. The data resides in Event Hub only temporarily."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        public static PredictiveMaintenanceStreamAnalyticsDescription = "Real-time stream processing in the cloud. Processes the incoming data stream from Event Hub and archives it into blob storage. Also aggregates the data for real-time insights.";
        public static PredcitiveMaintenanceStreamAnalyticsDetails = "<p>Stream Analytics extracts incoming raw data from Event Hub "
        + "(using SQL - like language), and archives the raw data in Azure blob storage for further processing and analysis. "
        + "It also aggregates the data and organizes it for real - time visualization in Power BI."
        + "<p><a href=\"https://powerbi.microsoft.com/en-us/desktop\">Power BI Desktop</a>"
        + "<p><a href=\"https://powerbi.microsoft.com/en-us/pricing\">Power BI Free</a>"
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        public static PredicitveMaintenanceStorageDescription = "Hyper-scale cloud storage for Big Data. In this solution it archives incoming raw data for long term storage.";
        public static PredictiveMaintenanceStorageDetails = "<p>Blob storage stores output from Stream Analytics job "
        + "(all the raw unprocessed data in this case), to be processed by HDInsight. It also stores ETL output "
        + "from HDInsight to be consumed by Azure Machine Learning. The predicted results from Azure Machine Learning "
        + "are also archived in blob storage before being copied to Azure SQL database."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        // Updated 2/4/2013 : DG : Resolves issue 5200 : Text replacement
        public static PredictiveMaintenanceHDInsightDescription = "Manage Apache Hadoop, Spark, Hbase and Storm. In this solution hive queries are executed on top of the raw data to prepare it for machine learning prediction.";
        public static PredictiveMaintenanceHDInsightDetails = "<p>HDInsight runs hive queries on raw data stored in blob storage. "
        + "The data is prepared here to be consumed by Azure Machine Learning for making predictions. Examples of tasks include "
        + "adjusting granularity of the data(viz., aggregating the sub - cycle data into cycle level data), generating additional "
        + "columns from sensor data(viz., calculating standard deviations, etc.). If  you wish to bring your own data then use "
        + "HDInsight / Hive to define your own ETL to aggregate data and define the data schematic needed for machine learning"
        + "prediction. The output from HDInsight is written back to blob storage."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        // Updated 2/4/2013 : DG : Resolves issue 5201 : Additional space
        public static PredictiveMaintenanceMLDescription = "Powerful cloud-based predictive analytics. The Machine Learning model predicts the remaining useful life of the aircraft.";
        public static PredictiveMaintenanceMLDetails = "<p>Azure Machine Learning predicts the remaining useful life of aircraft. "
        + "The machine learning model is already deployed and ready to be used. The model expects a certain data schematic which "
        + "must be adhered to in order to reuse the model."
        + "<p>The output from the model is written to blob storage and copied to Azure SQL database for Power BI visualization."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        // Updated 2/4/2013 : DG : Resolves issue 5202 : Additional space
        public static PredictiveMaintenanceSQLDescription = "A relational database-as-a-service. In this solution, SQL database stores the predicted results from the machine learning model.";
        public static PredictiveMaintenanceSQLDetails = "<p>SQL database is the backend data storage for Power BI in this solution. "
        + "It stores data (output from machine learning model containing prediction results, aggregated raw data, etc.) "
        + "to be consumed by Power BI for visualization. "
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        // Updated 2/4/2013 : DG : Resolves issue 5203 : Additional space
        public static PredictiveMaintenanceDataFactoryDescription = "Compose and orchestrate data services at scale. In this solution, data factory defines the scheduling of data movement across different components.";
        public static PredictiveMaintenanceDataFactoryDetails = "<p>Data Factory orchestrates and automates the movement and "
        + "transformation of data across various components (e.g., spin up on - demand HDI Cluster and process data every 15 "
        + "minutes, copy data to SQL database, etc.)."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        public static PredictiveMaintenancePowerBIDescription = "Transforms data into rich visualizations. Click here to see the instructions on how to build a Power BI dashboard for this solution.";
        // Updated 2/4/2013 : DG : Resolves issue 5198 : Text replacement
        public static PredictiveMaintenancePowerBIDetails = "<p>The solution comes with the PredictiveMaintenanceAerospace.pbix.pbix file to "
        + "recreate the Power BI visualization. Download the PredictiveMaintenanaceDataGeneratorv1.0.zip by clicking the Data Generator component "
        + "component, and then unzip the downloaded file to find the .pbix file in the Power BI Template folder. Follow the instructions to "
        + "recreate the Power BI visualizations."
        + "<p>In this solution, Power BI dashboard visualizes real-time data as well as the prediction results."
        + "<ol><li>Remaining Useful Life at last prediction time for four engines"
        + "<li>Remaining Useful Life over time for four engines</ol>"
        + "<p><a href=\"https://powerbi.microsoft.com/en-us/desktop\">Power BI Desktop</a>"
        + "<p><a href=\"https://powerbi.microsoft.com/en-us/pricing\">Power BI Free</a>"
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=699446&clcid=0x409\">Power BI Instructions</a>";

        // 4. Demand Forecasting specific content
        public static DFOverallDescription = "<div class='resource-header'>Description</div>"
        + "<p>This is an E2E solution for a Demand Forecasting use case in the Energgy Industry. "
        + "The green nodes on the left indicate "
        + "the Azure Services that we deployed to your subscription as part of this solution. If you wish to remove this "
        + "solution from your subscription, use the <b>Delete</b> option from the popup menu next to the Solution Name in this UI(Left Click ...)."
        + "<p><div class='resource-header'>Next Steps</div>"
        + "<ul><li>Step 1. <b>Download the sample data generator application</b> to start sending simulated data to the Event Hub. "
        + "Click on the <b>Input Data</b> node to download the application and follow the instructions in the ReadMe file to start "
        + "the data generator. <b>Note</b>: It is important to start the data generator as soon as possible. "
        + "If you could not start the data generator within 90 minutes, it is recommended to redeploy a new solution template."
        + "<li>Step 2.  <b>Monitor if data is flowing into your pipeline</b> by following the instructions in the "
        + "<a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a>"
        + "<li>Step 3. <b>Read</b> <a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a> for more information."
        + "<li>step 4. Lastly, <b>Build your Power BI dashboard</b> using the instruction from the <a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a></ul>";

        public static DemandForecastingDataNodeName = "Demand Forecasting Data Simulator"
        public static DemandForecastingDataNodeDescription = "Sample data generator for the deployed solution template.";
        public static DemandForecastingDataNodeDetails = "<p>Click Open button above to download the data generator zip file. "
        + "Unzip the file in a local folder and follow the instructions given in the Readme.txt"
        + "<p><b>Note</b>: It is important to start the data generator as soon as possible. If you could not start the data generator "
        + "within 90 minutes, it is recommended to redeploy a new solution template."	
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a>";

        public static DemandForecastingEventHubDescription = "Cloud-scale telemetry ingestions from websites, apps and devices. In this solution it collects raw sensor data to be processed by Stream Analytics.";
        public static DemandForecastingEventHubDetails = "<p>Event Hub collects unstructured raw events data as they arrive "
        + "from the data generator(data is produced at least once every second in this case) to be processed by Stream "
        + "Analytics.The data resides in Event Hub only temporarily."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a>";

        public static DemandForecastingStreamAnalyticsDescription = "Real-time stream processing in the cloud. Processes the incoming data stream from Event Hub and archives it into blob storage. Also aggregates the data for real-time insights.";
        public static DemandForecastingStreamAnalyticsDetails = "<p>Azure Stream Analytics extracts incoming raw data from Event Hub (using SQL-like language) "
        + "and archives the raw data in the user specified destination. In this solution template, there are two stream analytics jobs. "
        + "<p>The first one archives the raw data in Azure blob storage for further processing and analysis. You can click the Open button above to check it."
        + "<p>The second one aggregates the raw data and organizes it for real-time visualization in Power BI. You can refer "
        + "<a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a> for more information";

        public static DemandForecastingStorageDescription = "Hyper-scale cloud storage for Big Data. In this solution it archives incoming raw data for long term storage.";
        public static DemandForecastingStorageDetails = "<p>Blob storage stores output from Stream Analytics job "
        + "(all the raw unprocessed data in this case), to be processed by HDInsight. It also stores ETL output "
        + "from HDInsight to be consumed by Azure Machine Learning. The predicted results from Azure Machine Learning "
        + "are also archived in blob storage before being copied to Azure SQL database."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a>";
		/* better to let it jump to the right section of the page*/

        public static DemandForecastingHDInsightDescription = "Manage Apache Hadoop, Spark, Hbase and Storm. In this solution hive queries are executed on top of the raw data to prepare it for machine learning prediction.";
        public static DemandForecastingHDInsightDetails = "<p>HDInsight runs hive queries on raw data stored in blob storage. "
        + "The data is prepared here to be consumed by Azure Machine Learning for making predictions.Examples of tasks include "
        + "aggregate the 10 seconds frequence substation data to hourly region level data, generate input data for Machine Learning "
        + "Model etc.). If you wish to bring your own data then use "
        + "HDInsight / Hive to define your own ETL to aggregate data and define the data schematic needed for machine learning "
        + "prediction.The output from HDInsight is written back to blob storage."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a>";
		/* better to let it jump to the right section of the page*/

        public static DemandForecastingMLDescription = "Powerful cloud-based predictive analytics. The Machine Learning model predicts the demand usage of energy.";
        public static DemandForecastingMLDetails = "<p>Azure Machine Learning predicts demand usage of energy. "
        + "The machine learning model is already deployed and ready to be used.The model expects a certain data schematic which "
        + "must be adhered to in order to reuse the model."
        + "<p>The output from the model is written to blob storage and copied to Azure SQL database for Power BI visualization."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a>";
		/* better to let it jump to the right section of the page*/

        public static DemandForecastingSQLDescription = "A relational database-as-a-service. In this solution, SQL database stores the predicted results from the machine learning model.";
        public static DemandForecastingSQLDetails = "<p>SQL database is the backend data storage for Power BI in this solution. "
        + "It stores data(output from machine learning model containing prediction results, aggregated raw data, reference data etc.) "
        + "to be consumed by Power BI for visualization. "
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a>";
		/* better to let it jump to the right section of the page*/

        public static DemandForecastingDataFactoryDescription = "Compose and orchestrate data services at scale. In this solution, data factory defines the scheduling of data movement across different components.";
        public static DemandForecastingDataFactoryDetails = "<p>Data Factory orchestrates and automates the movement and "
        + "transformation of data across various components(e.g., spin up on - demand HDI Cluster and process data every 1 "
        + "hour, copy data to SQL database, etc.)."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a>";
	/* need to replace this link*/

        public static DemandForecastingPowerBIDescription = "Transforms data into rich visualizations. Click here to see the instructions on how to build a Power BI dashboard for this solution.";
        public static DemandForecastingPowerBIDetails = "<p>In this solution, Power BI dashboard visualizes real-time "
        + "data as well as the prediction results. Please follow the instruction in "
        + "<a href=\"http://go.microsoft.com/fwlink/?LinkID=723411&clcid=0x409\"  target= 'blank' >Technical Guide</a> to quickly set up your Power BI dashboard"	
        + "<p><a href=\"https://powerbi.microsoft.com/en-us/desktop\">Power BI Desktop</a>"
        + "<p><a href=\"https://powerbi.microsoft.com/en-us/pricing\">Power BI Free</a>";

        public static DemandForecastingReferenceDataNodeName = "Region, Substation, TopologyGeo Data";
        public static DemandForecastingReferenceDataDescription = "The Reference is a set of reference datasets containing regions, substation and topologygeo mapping data.";
        public static DemandForecastingReferenceDataDetails = "There are reference datasets that contains regions, substation and topologygeo mapping data. These datasets are loaded into the Azure BlobStorage that gets provisioned as part of the deployment in your account. The data is leveraged for both real-time and batch processing. ";
		
        // 5. Anomaly Detection specific content

        public static ADOverallDescription = "<div class='resource-header'>Description</div><p>This is an E2E solution for anomaly detection<p><div class='resource-header'>Next Steps</div>";
        
        public static AnomalyDetectionDataNodeName = "Data Generator - Click 'Open' to download."
        public static AnomalyDetectionDataNodeDescription = "Sample data generator for the deployed solution template.";
        public static AnomalyDetectionDataNodeDetails = "<p>Download the file ADDataGen.zip by clicking the above link. "
        + "Unzip the file in a local folder and follow the instructions given in the Readme.txt"
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        public static AnomalyDetectionEventHubDescription = "Cloud-scale telemetry ingestions from websites, apps and devices. In this solution it collects raw sensor data to be processed by Stream Analytics.";
        public static AnomalyDetectionEventHubDetails = "<p>Event Hub collects unstructured raw events data as they arrive "
        + "from the data generator (data is produced at least once every second in this case) to be processed by Stream "
        + "Analytics. The data resides in Event Hub only temporarily."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        public static AnomalyDetectionStreamAnalyticsDescription = "Real-time stream processing in the cloud. Processes the incoming data stream from Event Hub and archives it into blob storage. Also aggregates the data for real-time insights.";
        public static AnomalyDetectionStreamAnalyticsDetails = "<p>Stream Analytics extracts incoming raw data from Event Hub "
        + "(using SQL - like language), and archives the raw data in Azure blob storage for further processing and analysis. "
        + "It also aggregates the data and organizes it for real - time visualization in Power BI."
        + "<p><a href=\"https://powerbi.microsoft.com/en-us/desktop\">Power BI Desktop</a>"
        + "<p><a href=\"https://powerbi.microsoft.com/en-us/pricing\">Power BI Free</a>"
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        public static AnomalyDetectionStorageDescription = "Hyper-scale cloud storage for Big Data. In this solution it archives incoming raw data for long term storage.";
        public static AnomalyDetectionStorageDetails = "<p>Blob storage stores output from Stream Analytics job "
        + "(all the raw unprocessed data in this case), to be processed by HDInsight. It also stores ETL output "
        + "from HDInsight to be consumed by Azure Machine Learning. The predicted results from Azure Machine Learning "
        + "are also archived in blob storage."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        public static AnomalyDetectionHDInsightDescription = "Manage Apache Hadoop, Spark, Hbase and Storm. In this solution hive queries are executed on top of the raw data to prepare it for machine learning prediction.";
        public static AnomalyDetectionHDInsightDetails = "<p>HDInsight runs hive queries on raw data stored in blob storage. "
        + "The data is prepared here to be consumed by Azure Machine Learning for anomaly detection. If  you wish to bring your own data then use "
        + "HDInsight / Hive to define your own ETL to aggregate data and define the data schematic needed for machine learning"
        + "anomaly detection. The output from HDInsight is written back to blob storage."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        public static AnomalyDetectionMachineLearningNodeName = "Azure Marketplace API";
        public static AnomalyDetectionMLDescription = "Azure Marketplace API for Anomaly Detection";
        public static AnomalyDetectionMLDetails = "<p>Anomaly Detection API is built with Azure Machine Learning and can detect anomalies in time series data with numerical values that are uniformly spaced in time."
        + "<p>The API can detect different types of anomalies such as spikes, dips, level changes, trends and extreme values."
        + "<p>The output from the model is written to blob storage for Power BI visualization."
        + "<p><a href=\"https://datamarket.azure.com/dataset/aml_labs/anomalydetection\">Anomaly Detection API</a>"
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        public static AnomalyDetectionDataFactoryDescription = "Compose and orchestrate data services at scale. In this solution, data factory defines the scheduling of data movement across different components.";
        public static AnomalyDetectionDataFactoryDetails = "<p>Data Factory orchestrates and automates the movement and "
        + "transformation of data across various components (e.g., spin up on - demand HDI Cluster and process data every 15 "
        + "minutes, etc.)."
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409\">Technical Guide</a>";

        public static AnomalyDetectionPowerBIDescription = "Transforms data into rich visualizations. Click here to see the instructions on how to build a Power BI dashboard for this solution.";
        public static AnomalyDetectionPowerBIDetails = "<p>The solution comes with the AnomalyDetection.pbix file to "
        + "recreate the Power BI visualization. Download the ADDataGen.zip by clicking the Data Generator component "
        + "component, and then unzip the downloaded file to find the .pbix file in the Power BI Template folder. Follow the instructions to "
        + "recreate the Power BI visualizations."
        + "<p>In this solution, Power BI dashboard visualizes real-time data as well as the anomaly detection results."
        + "<p><a href=\"https://powerbi.microsoft.com/en-us/desktop\">Power BI Desktop</a>"
        + "<p><a href=\"https://powerbi.microsoft.com/en-us/pricing\">Power BI Free</a>"
        + "<p><a href=\"http://go.microsoft.com/fwlink/?LinkID=699446&clcid=0x409\">Power BI Instructions</a>";


        /*
         Link mapping types:
            exeLinkKey: The key to look up in the template.exeLinks object
            exeLinkOverride: An override to ignore any exe links returned by the server
            nodeLinkOverride: An explicit link to override or replace the resourceUrl on the node
        */
        public static linkMappings = {
            connectedcar: {
                InputData: {
                    exeLinkKey: 'careventgenerator',
                    exeLinkOverride: null,
                    nodeLinkOverride: null,
                },
                PowerBI: {
                    exeLinkKey: 'RealtimeDashboardApp',
                    exeLinkOverride: null,
                    nodeLinkOverride: 'http://go.microsoft.com/fwlink/?LinkId=708786',
                }
            },
            predictivemaintenance: {
                InputData: {
                    exeLinkKey: 'PredictiveMaintenanceDataGeneratorv1.0',
                    exeLinkOverride: null,
                    nodeLinkOverride: null,
                },
                PowerBI: {
                    exeLinkKey: null,
                    /* Temporary change until a fix goes in to prevent the connected car data showing up on
                       all PowerBI nodes */
                    //exeLinkOverride: 'http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409',
                    exeLinkOverride: null,
                    nodeLinkOverride: null
                }
            },
            demandforecasting: {
                InputData: {
                    exeLinkKey: 'DemandForecastingDataGeneratorv1.0',
                    exeLinkOverride: null,
                    nodeLinkOverride: null,
                },
                PowerBI: {
                    //exeLinkOverride: 'http://go.microsoft.com/fwlink/?LinkID=703750&clcid=0x409',
                    exeLinkKey: null,
                    exeLinkOverride: null,
                    nodeLinkOverride: null
                }
            },
            anomalydetection: {
                InputData: {
                    exeLinkKey: "ADDataGen",
                    exeLinkOverride: null,
                    nodeLinkOverride: null
                },
                PowerBI: {
                    exeLinkKey: null,
                    exeLinkOverride: null,
                    nodeLinkOverride: null
                }
            }
        };
    }
}