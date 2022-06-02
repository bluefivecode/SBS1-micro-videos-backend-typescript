import { Category } from "./category";
import { omit } from "lodash";

describe('Category Unit Test', () => {
    test('constructor of category', () => {

       let category = new Category({name: 'Movie'});
       let props = omit(category.props, ['created_at']);

        expect(props).toStrictEqual({
            name: 'Movie',
            description: null,
            is_active: true,
        });

        expect(category.props.created_at).toBeInstanceOf(Date);

        category = new Category({
            name: 'Movie', 
            description: 'some description',
            is_active: false,
        });
        
        let created_at = new Date();
        
        expect(category.props).toStrictEqual({
            name: 'Movie',
            description: 'some description',
            is_active: false,
            created_at,
        });
    });
});