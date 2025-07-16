// docs/userInfo.docs.js
const userInfoDocs = {
    '/userChanges/userInfo': {
        post: {
            tags: ['UserChanges'],
            summary: 'Submit full user info',
            description: 'Allows an authenticated user to submit all their personal data (like age, gender, weight, height, etc.)',
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                age: { type: 'number', example: 25 },
                                gender: { type: 'string', example: 'male' },
                                weight: { type: 'number', example: 70 },
                                height: { type: 'number', example: 175 },
                                isVegetarian: { type: 'boolean', example: false },
                                b12: { type: 'number', example: 400 },
                                illnesses: { type: 'array', items: { type: 'string' }, example: ['anemia'] },
                                medications: { type: 'array', items: { type: 'string' }, example: ['iron supplements'] },
                                period: { type: 'string', example: 'regular' },
                                category: { type: 'string', example: 'athlete' }
                            },
                            required: ['age', 'gender', 'weight', 'height']
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'User info saved successfully',
                    content: {
                        'application/json': {
                            example: {
                                success: true,
                                message: 'User info saved',
                                data: {
                                    userId: 'abc123',
                                    age: 25,
                                    gender: 'male',
                                    weight: 70,
                                    height: 175,
                                    isVegetarian: false,
                                    b12: 400,
                                    illnesses: ['anemia'],
                                    medications: ['iron supplements'],
                                    period: 'regular',
                                    category: 'athlete'
                                }

                            }
                        }
                    }
                },
                400: {
                    description: 'Validation error or bad request'
                },
                401: {
                    description: 'Unauthorized (no token or invalid token)'
                }
            }
        }
    }
};

export default userInfoDocs;
