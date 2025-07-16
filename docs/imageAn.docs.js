const imageAnDocs = {
    '/imageAn': {
        post: {
            tags: ['Anemia Detection'],
            summary: 'Detect anemia from an image',
            description: 'Uploads an image and returns anemia detection results.',
            requestBody: {
                required: true,
                content: {
                    'multipart/form-data': {
                        schema: {
                            type: 'object',
                            properties: {
                                image: {
                                    type: 'string',
                                    format: 'binary',
                                    description: 'Image file of the eye or relevant area'
                                }
                            },
                            required: ['image']
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'Detection successful',
                    content: {
                        'application/json': {
                            example: {
                                success: true,
                                message: 'Anemia detection completed',
                                data: {
                                    result: 'Positive',
                                    confidence: '92.5%'
                                }
                            }
                        }
                    }
                },
                400: {
                    description: 'Bad Request - Invalid or missing image',
                },
                500: {
                    description: 'Server Error',
                }
            }
        }
    }
};

export default imageAnDocs;
