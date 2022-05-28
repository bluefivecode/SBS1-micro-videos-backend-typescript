import {Category} from './category';

describe('Category Unit Tests',()=>{
   
    test('constructor of category', ()=>{

        const props = {
            name: 'Movie',
            description: 'some description',
            is_active: true,
            created_at: new Date()
        }

        const category: any = new Category(props);

        expect(category.name).toBe('Movie');
        expect(category.description).toBe('some description');
        expect(category.is_active).toBeTruthy();
        expect(category.created_at).toBe(props.created_at);
    });
});