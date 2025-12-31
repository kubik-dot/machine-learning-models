import os
import logging
import pickle
import yaml

def load_config(config_file):
    with open(config_file, 'r') as stream:
        try:
            return yaml.safe_load(stream)
        except yaml.YAMLError as exc:
            logging.error(exc)

def save_model(model, model_file):
    if not os.path.exists(os.path.dirname(model_file)):
        os.makedirs(os.path.dirname(model_file))
    with open(model_file, 'wb') as f:
        pickle.dump(model, f)

def load_model(model_file):
    with open(model_file, 'rb') as f:
        return pickle.load(f)