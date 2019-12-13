# Wildfire Exploratory Visualization and Machine Learning


## Objectives

Wildfires are a large issue in the United States and cause devastation year after year. This project aims to use a government-funded dataset of wildfire data to generate visualizations for better understanding of wildfire scope, frequency, and causation. Additionally, these visualizations guide the creation of machine learning models using the Random Forest Classifier algorithm to predict the causes of wildfires throughout the United States given user input.

## Innovations

This project demonstrates the data type conversion and cleaning performed on the wildfire dataset as well as the exploratory analysis and machine learning experiments performed before the creation of machine learning models with strong accuracy evaluations for the available data.

## Capabilites

The output is presented in the form of a dynamic web application deployed with cloud services. The application supports user input to dynamically generate visualizations for parameters of interest; also, users can provide details of fires and perform causation predictions with the trained models.

## Demo Video

A YouTube video of the project demonstration and presentation can be found at https://youtu.be/aAZ1EnyyqEk

## System Structure

A Web Application created with ReactJS, D3, and ChartJS.

The backend business logic is encapsulated in a Python Flask application.

The dataset was stored in a MongoDB collection.

## Dataset

The wildfire dataset was found on Kaggle at: https://www.kaggle.com/rtatman/188-million-us-wildfires

The dataset has 1.88 million wildfires in the United States from 1992 to 2015 and is available for public use.