import { useTodo } from "../context/TodoContext";
import {
    Button,
    Form,
    Input,
    Col,
    Row,
    List,
    Typography,
    Divider,
    Checkbox,
} from "antd";

const { Title } = Typography;

const TodoPage = () => {
    const { todoList, addTodo, updateTodo, deleteTodo } = useTodo();

    const onFinish = (values) => {
        const { name, note } = values;
        addTodo({ name, note, completed: false });
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Row>
            <Col span={6}>
                <h1>Maybe Useful Todo List</h1>
            </Col>
            <Col span={18}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Form.Item
                        label="Task Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input task name!",
                            },
                        ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Task note"
                        name="note"
                        rules={[
                            {
                                required: false,
                                message: "Note...!",
                            },
                        ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}>
                        <Button type="primary" htmlType="submit">
                            Add Task
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={24}>
                <Divider orientation="left">Default Size</Divider>
                <List
                    header={
                        <Title span={24} level={5} mark>
                            TASK LIST
                        </Title>
                    }
                    bordered
                    dataSource={todoList}
                    renderItem={(todo) => (
                        <List.Item>
                            <Checkbox
                                checked={todo.completed}
                                onChange={() =>
                                    updateTodo(todo._id, !todo.completed)
                                }>
                                Checkbox
                            </Checkbox>
                            <Title span={12} level={5} mark>
                                Name: {todo.name}
                            </Title>
                            <Title span={12} level={5}>
                                Note: {todo.note}
                            </Title>
                            <Button
                                color="danger"
                                variant="solid"
                                onClick={() => deleteTodo(todo._id)}>
                                Delete
                            </Button>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
        // <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>

        // <ul>
        //     {Array.isArray(todoList) &&
        //         todoList.map((todo) => (
        //             <li key={todo._id}>
        //                 <input
        //                     type="checkbox"
        //                     checked={todo.completed}
        //                     onChange={() =>
        //                         updateTodo(todo._id, !todo.completed)
        //                     }
        //                 />
        //                 <span>
        //                     {todo.name} - {todo.note}
        //                 </span>
        //                 <button onClick={() => deleteTodo(todo._id)}>
        //                     Delete
        //                 </button>
        //             </li>
        //         ))}
        // </ul>
        // </div>
    );
};

export default TodoPage;
