// types.ts
export interface ModelConfig {
    id: string;
    name: string;
    version: string;
    description?: string;
    hyperparameters: Record<string, any>;
    trainingDataPath: string;
    validationDataPath: string;
    testDataPath: string;
    outputPath: string;
}

export interface TrainingResult {
    modelId: string;
    accuracy: number;
    loss: number;
    trainingTime: number;
    epochs: number;
    metrics: Record<string, number>;
}

export interface PredictionRequest {
    modelId: string;
    inputData: any[];
}

export interface PredictionResponse {
    modelId: string;
    predictions: any[];
    confidenceScores?: number[];
}

export interface ModelMetadata {
    id: string;
    name: string;
    version: string;
    createdAt: Date;
    updatedAt: Date;
    status: 'pending' | 'training' | 'trained' | 'failed';
}

export interface ErrorResponse {
    error: string;
    message: string;
    statusCode: number;
}