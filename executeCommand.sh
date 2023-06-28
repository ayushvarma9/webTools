#!/bin/bash

# Get the command as an argument
command=$1

# Execute the command
eval nmap $command
