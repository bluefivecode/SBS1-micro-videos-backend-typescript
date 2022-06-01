import { Category } from "./category";

describe('Category Test', () => {
    test('constructor of category', () => {

        const created_at = new Date();
        const category = new Category({
            name: 'Movie',
            description: 'some description',
            is_active: true,
            created_at
        });

        expect(category.props).toMatchObject({
            name: 'Movie',
            description: 'some description',
            is_active: true,
            created_at
        });
    });
});