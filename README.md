# Look on Combincation (LoC)
This project is to predict win rate from simulated virtual match-up of *League of Legends*.

Basically LoC system consists of 2 system, react client and API server. Client program provides the Web app to users through React engine and it calls API to process core logics of the system, including calculating win rate.

## How to install

### Client

### Server

### Tensorflow
Ubuntu 18.04 (CUDA 10) is assumed. If you have different OS, see https://www.tensorflow.org/install/gpu.
# Add NVIDIA package repositories
$ wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/cuda-repo-ubuntu1804_10.0.130-1_amd64.deb
$ sudo dpkg -i cuda-repo-ubuntu1804_10.0.130-1_amd64.deb
$ sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/7fa2af80.pub
$ sudo apt-get update
$ wget http://developer.download.nvidia.com/compute/machine-learning/repos/ubuntu1804/x86_64/nvidia-machine-learning-repo-ubuntu1804_1.0.0-1_amd64.deb
$ sudo apt install ./nvidia-machine-learning-repo-ubuntu1804_1.0.0-1_amd64.deb
$ sudo apt-get update
# Install NVIDIA driver
$ sudo apt-get install --no-install-recommends nvidia-driver-410
# Reboot. Check that GPUs are visible using the command: nvidia-smi
# Install development and runtime libraries (~4GB)
$ sudo apt-get install --no-install-recommends \
    cuda-10-0 \
    libcudnn7=7.4.1.5-1+cuda10.0  \
    libcudnn7-dev=7.4.1.5-1+cuda10.0
# Install TensorRT. Requires that libcudnn7 is installed above.
sudo apt-get update && \
        sudo apt-get install nvinfer-runtime-trt-repo-ubuntu1804-5.0.2-ga-cuda10.0 \
        && sudo apt-get update \
        && sudo apt-get install -y --no-install-recommends libnvinfer-dev=5.0.2-1+cuda10.0


## How to run
Both client and server program should be launched before use and they run on local program. If you host this application to outside, please use reverse proxy middleware such as Apache or Nginx.

Run client program by
```
$ cd client
$ npm start
```
Client program will be run on port 3000

Run server program by
```
$ cd server
$ node app.js
```
Server program will be run on port 3001

## How to use
