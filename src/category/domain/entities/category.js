"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(props) {
        this.props = props;
    }
    get name() {
        return this.props.name;
    }
    get description() {
        return this.props.description;
    }
    get is_active() {
        return this.props.is_active;
    }
    get created_at() {
        return this.props.created_at;
    }
}
exports.Category = Category;
const category = new Category({ name: 'Movie', is_active: true });
console.log(category);
