export type CategoryProperties = {
    name: string;
    description?: string;
    is_active?: boolean;
    created_at?: Date;

}

export class Category{

    constructor(public readonly pros: CategoryProperties){}

    get name(): string{
        return this.pros.name;
    }

    get description(): string | undefined{
        return this.pros.description;
    }

    get is_active(): boolean | undefined{
        return this.pros.is_active; 
    }

    get created_at(): Date | undefined{
        return this.pros.created_at;
    }
}

const category = new Category({name:'', is_active:true, description:''});