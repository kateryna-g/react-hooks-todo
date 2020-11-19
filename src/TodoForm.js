import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import Button from "@material-ui/core/Button";

const TodoForm = ({saveTodo}) => {
    const {value, reset, onChange} = useInputState();

    return (
        <form
            onSubmit={event => {
                event.preventDefault();

                saveTodo(value);
                reset();
            }}
        >
            <div className='container'>
                <TextField
                    variant="outlined"
                    placeholder="Add todo"
                    margin="normal"
                    onChange={onChange}
                    value={value}
                />
                <Button variant="contained" color="secondary" type='submit'>
                    Add Todo
                </Button>
            </div>
        </form>
    );
};

export default TodoForm;
