#!/bin/bash

PORT=$1

if [ -z "$PORT" ]; then
  echo "Please provide a port number."
  exit 1
fi

# Check if the port is in use
PROCESS_ID=$(lsof -t -i:$PORT)

if [ -z "$PROCESS_ID" ]; then
  echo "Port $PORT is not in use."
else
  echo "Port $PORT is in use by process $PROCESS_ID. Killing the process..."
  kill -9 $PROCESS_ID
  echo "Process $PROCESS_ID killed."
fi
