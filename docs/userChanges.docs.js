// docs/userChanges.docs.js

const userChangesDocs = {
    '/api/user/changeWeight': {
        patch: {
            tags: ['User Changes'],
            summary: 'Change user weight',
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                weight: { type: 'number', example: 70 }
                            },
                            required: ['weight']
                        }
                    }
                }
            },
            responses: {
                200: { description: 'Weight changed successfully' },
                400: { description: 'Validation error' },
                401: { description: 'Unauthorized' }
            }
        }
    },

    '/api/user/changeHeight': {
        patch: {
            tags: ['User Changes'],
            summary: 'Change user height',
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                height: { type: 'number', example: 175 }
                            },
                            required: ['height']
                        }
                    }
                }
            },
            responses: {
                200: { description: 'Height changed successfully' },
                400: { description: 'Validation error' },
                401: { description: 'Unauthorized' }
            }
        }
    },

    '/api/user/changeVegetarian': {
        patch: {
            tags: ['User Changes'],
            summary: 'Change vegetarian status',
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                vegetarian: { type: 'boolean', example: true }
                            },
                            required: ['vegetarian']
                        }
                    }
                }
            },
            responses: {
                200: { description: 'Vegetarian status changed successfully' },
                400: { description: 'Validation error' },
                401: { description: 'Unauthorized' }
            }
        }
    },

    '/api/user/changeB12': {
        patch: {
            tags: ['User Changes'],
            summary: 'Change B12 level',
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                b12: { type: 'number', example: 300 }
                            },
                            required: ['b12']
                        }
                    }
                }
            },
            responses: {
                200: { description: 'B12 level changed successfully' },
                400: { description: 'Validation error' },
                401: { description: 'Unauthorized' }
            }
        }
    },

    '/api/user/changeIllnesses': {
        patch: {
            tags: ['User Changes'],
            summary: 'Change illnesses',
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                illnesses: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    example: ['diabetes', 'hypertension']
                                }
                            },
                            required: ['illnesses']
                        }
                    }
                }
            },
            responses: {
                200: { description: 'Illnesses updated successfully' },
                400: { description: 'Validation error' },
                401: { description: 'Unauthorized' }
            }
        }
    },

    '/api/user/changePeriod': {
        patch: {
            tags: ['User Changes'],
            summary: 'Change period cycle info',
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                period: { type: 'string', example: 'regular' }
                            },
                            required: ['period']
                        }
                    }
                }
            },
            responses: {
                200: { description: 'Period info updated' },
                400: { description: 'Validation error' },
                401: { description: 'Unauthorized' }
            }
        }
    },

    '/api/user/changeCategory': {
        patch: {
            tags: ['User Changes'],
            summary: 'Change health category',
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                category: { type: 'string', example: 'overweight' }
                            },
                            required: ['category']
                        }
                    }
                }
            },
            responses: {
                200: { description: 'Category updated' },
                400: { description: 'Validation error' },
                401: { description: 'Unauthorized' }
            }
        }
    },

    '/api/user/changeMedications': {
        patch: {
            tags: ['User Changes'],
            summary: 'Update medications list',
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                medications: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    example: ['metformin', 'lisinopril']
                                }
                            },
                            required: ['medications']
                        }
                    }
                }
            },
            responses: {
                200: { description: 'Medications updated' },
                400: { description: 'Validation error' },
                401: { description: 'Unauthorized' }
            }
        }
    },

    '/api/user/profileImage': {
        patch: {
            tags: ['User Changes'],
            summary: 'Upload or change profile image',
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'multipart/form-data': {
                        schema: {
                            type: 'object',
                            properties: {
                                changeProfileImage: {
                                    type: 'string',
                                    format: 'binary'
                                }
                            },
                            required: ['changeProfileImage']
                        }
                    }
                }
            },
            responses: {
                200: { description: 'Profile image updated' },
                400: { description: 'Upload error or validation issue' },
                401: { description: 'Unauthorized' }
            }
        }
    }
};

export default userChangesDocs;
