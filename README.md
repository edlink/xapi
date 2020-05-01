![Node.js CI](https://github.com/CookieCookson/xAPI-JS/workflows/Node.js%20CI/badge.svg)

# xAPI JS
## Overview
An XAPI JS library for communicating with an LRS.

## Supported xAPI Versions
1.0.0

## Installation
```bash
npm install xapi-js
```

## Usage
This library has been developed with both opinionated and unopinionated approaches to xAPI.

To construct statements manually with full control, use the [xAPI](/src/XAPI/README.md) wrapper.

To send off premade statements based off a profile, use the corresponding profile. Profiles currently supported:
- [cmi5](src/profiles/Cmi5/Cmi5.ts)
- [xAPI SCORM Profile (WIP)](/src/profiles/SCORMProfile/README.md)
