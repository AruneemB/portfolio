const projects = {
    ml: [
        {
            title: 'PCA & KMeans for Carnatic Ragas',
            description: 'PCA 3D embeddings + LazyPredict + KMeans clustering on MFCC features for raga classification.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/dimension-reduction-3d-visuals-to-cluster-ragas',
            tags: ['Audio Classification', 'Unsupervised Learning', 'Music Information Retrieval', '3D Data Visualization']
        },
        {
            title: 'TSP: Nearest Neighbor vs Genetic Algorithms',
            description: 'Comparing greedy heuristic & evolutionary optimization for UK city routing with Folium maps.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/nn-heuristic-gas-to-optimize-uk-city-routes-tsp',
            tags: ['Traveling Salesman Problem', 'Genetic Algorithms', 'Nearest Neighbor', 'Route Optimization']
        },
        {
            title: 'TF-IDF + SGD for arXiv Categorization',
            description: 'Stochastic gradient descent on 50K TF-IDF features for multi-class research paper classification.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/tf-idf-sgd-clfs-for-arxiv-paper-categorization',
            tags: ['Text Classification', 'NLP', 'TF-IDF', 'SGD Classifiers', 'N-grams']
        },
        {
            title: 'LazyPredict + FNN for Quantum Decision-Making',
            description: 'Benchmarking 27 classifiers & deep FNN on quantum superposition decision outcomes dataset.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/lazypredict-fnns-for-quantum-decision-making',
            tags: ['Batch Normalization', 'LeakyReLU', 'AutoML Benchmarking']
        },
        {
            title: 'UMAP/t-SNE for Greek MNIST',
            description: 'ResNet-18 embeddings → UMAP/t-SNE visualization, FNN for Greek letter prediction.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/greek-letter-embedding-projection-ml-prediction',
            tags: ['Image Embeddings', 'Dimensionality Reduction', 'Feature Extraction']
        },
        {
            title: 'MobileNetV2 for Thermal Motor Diagnosis',
            description: 'Transfer learning on thermal images for 11-class induction motor fault classification.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/mobilenetv2-for-thermal-induction-motor-images',
            tags: ['Computer Vision', 'Thermal Imaging', 'Motor Diagnosis', 'Fault Detection']
        },
        {
            title: 'U-Net + ResNet50 for Water Body Segmentation',
            description: 'Binary segmentation with Dice + BCE loss on satellite imagery for water body detection.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/pytorch-networks-for-water-body-segmentation',
            tags: ['Semantic Segmentation', 'Albumentations', 'Water Detection', 'PyTorch']
        },
        {
            title: 'U-Net + ResNet34 for Lunar Rock Segmentation',
            description: 'U-Net with ResNet34 encoder for lunar rock segmentation using BCE + Dice loss and IoU evaluation.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/u-net-resnet34-for-lunar-rock-segmentation',
            tags: ['Photorealistic Image Segmentation', 'Computer Vision', 'Intersection over Union (IOU)']
        },
    ],
    quant: [
        {
            title: 'NVIDIA Signals & Rolling MI',
            description: 'Measured rolling mutual information of 90+ indicators to track predictive power in returns.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/nvidia-technical-signals-rolling-mi-visualization',
            tags: ['Mutual Information', 'Feature Dynamics', 'Technical Indicators', 'Equity Forecasting']
        },
        {
            title: 'RL vs Heuristics for Crypto',
            description: 'PPO agent vs mean-variance, momentum & equal-weight strategies for 8-asset crypto portfolios.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/rl-heuristics-for-crypto-portfolio-optimization',
            tags: ['Portfolio Optimization', 'Benchmark Comparison', 'Asset Allocation']
        },
        {
            title: 'Unified LSTM for BIST Buy/Sell Signals & Trading',
            description: 'LSTM model with 20+ technical indicators for binary trading signals on 9 Turkish stocks.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/unified-lstm-for-bist-buy-sell-signaling-trading',
            tags: ['Technical Analysis', 'Binary Classification', 'Deep Learning', 'Turkish Equities']
        },
        {
            title: 'GNNs for Crypto Sentiment Propagation',
            description: 'SAGE+GAT model predicting price changes via sentiment correlation graphs across 10 tickers.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/gnns-for-social-sentiment-propagation-in-crypto',
            tags: ['Graph Neural Networks', 'Sentiment Analysis', 'SAGEConv', 'GAT', 'Price Forecasting']
        },
        {
            title: 'Candlestick Clustering for Forecasting',
            description: 'KMeans on candlestick vectors to predict volatility & returns via pattern transitions.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/candlestick-vector-clustering-for-visual-inference',
            tags: ['Candlestick Patterns', 'Volatility Forecasting', 'Market Regimes', 'PCA', 't-SNE']
        },
        {
            title: 'Quantile Regression for VaR, CVaR',
            description: 'Neural quantile regressor predicting return distributions for risk metrics & backtesting.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/lstm-quantile-regressors-for-var-cvar-backtesting',
            tags: ['Value at Risk', 'Conditional Value at Risk', 'Statistical Tests', 'Risk Management']
        },
        {
            title: 'HMMs, SDEs for VIX Trading',
            description: 'HMM detects volatility regimes; OU process models mean reversion for adaptive VIX strategy.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/hmms-sdes-for-vix-regime-aware-risk-management',
            tags: ['Hidden Markov Models', 'Stochastic Differential Equations', 'CBOE Volatility Index', 'Regime Detection']
        },
    ],
    swe: [
        {
            title: 'UniPair: Unicorn Startup Recommendation System',
            description: 'K-NN on investor/industry/location features for cosine-similarity based startup matching UI.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/unipair-a-unicorn-startup-recommendation-pipeline',
            tags: ['Recommender Systems', 'K-Nearest Neighbors', 'Collaborative Filtering', 'Startup Analysis']
        },
        {
            title: 'EauMatch: Perfume Recommendation System',
            description: 'TF-IDF + cosine similarity on scent descriptions for content-based fragrance matching.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/eaumatch-a-perfume-recommendation-system',
            tags: ['Recommender Systems', 'Content-Based Filtering', 'Text Similarity', 'NLP', 'E-Commerce']
        },
        {
            title: 'Semantic Anime Search with FAISS & BERT',
            description: 'Sentence-BERT embeddings + FAISS L2 indexing for natural language anime recommendations.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/bert-embeddings-faiss-indexing-for-anime-recsys',
            tags: ['Neural Retrieval', 'Vector Search', 'Semantic Search', 'Sentence Transformers', 'FAISS', 'Bert Embeddings']
        },
        {
            title: 'CodeGen LLM for Project Euler Solutions',
            description: 'Salesforce CodeGen-350M generating Python code from 830 mathematical problem descriptions.',
            url: 'https://www.kaggle.com/code/aruneembhowmick/codegen-for-llm-based-approach-to-project-euler',
            tags: ['Code Generation', 'LLMs', 'Automated Programming', 'Simulated Reasoning', 'Mathematical Problems']
        },
        {
          title: 'Encoding + Cosine Scoring for Dinosaur Similarity',
          description: 'Feature encoding and cosine similarity across categorical and numerical dinosaur attributes with Wikipedia data retrieval.',
          url: 'https://www.kaggle.com/code/aruneembhowmick/encoding-cosine-scoring-for-dinosaur-similarity',
          tags: ['Label Encoding', 'Cosine Similarity', 'BeautifulSoup', 'Requests']
        },
        {
          title: 'SBERT for Semantic Bangladeshi News Recommendation',
          description: 'Sentence-BERT embeddings combined with temporal decay for news recommendation.',
          url: 'https://www.kaggle.com/code/aruneembhowmick/sbert-for-semantic-bangladeshi-news-recommendation',
          tags: ['Sentence-BERT', 'Hybrid Recommender', 'Temporal Features', 'Text Embeddings']
        },
        {
          title: 'LangChain RAG, FLAN-T5 for SW Novel Chronology',
          description: 'Semantic RAG pipeline using FLAN-T5 and Chroma to infer and query Star Wars novel timelines with UMAP visualization.',
          url: 'https://www.kaggle.com/code/aruneembhowmick/u-net-resnet34-for-lunar-rock-segmentation',
          tags: ['Retrieval-Augmented Generation', 'LangChain', 'LLM Reasoning', 'Google FLAN-T5']
        },
    ],
    phil: [
        {
            title: 'The Ontology of Abstract Objects',
            description: 'Work in progress.',
            url: 'https://aruneembhowmick.substack.com/',
            tags: ['Metaphysics', 'Platonism', 'Nominalism']
        },
        {
            title: 'The Infinite Regress Problem',
            description: 'Work in progress.',
            url: 'https://aruneembhowmick.substack.com/',
            tags: ['Epistemology', 'Logic', 'Foundationalism', 'Coherentism', 'Justification', 'Causation']
        },
    ]
};
