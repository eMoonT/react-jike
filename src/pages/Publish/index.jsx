import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import {
  createArticleApi,
  getArticleById,
  updateArticleApi,
} from "../../apis/article";
import { message } from "antd";
import { useChannel } from "../../hooks/useChannel";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const { Option } = Select;

const Publish = () => {
  const { channelList } = useChannel();

  const onSubmit = async (value) => {
    const { title, content, channel_id } = value;
    if (imgType !== imgList.length) {
      return message.warning("还有图片没有上传完毕");
    }
    const reqData = {
      title,
      content,
      cover: {
        type: imgType,
        images: imgList.map((item) => {
          if (item.response) {
            return item.response.data.url;
          } else {
            return item.url;
          }
        }),
      },
      channel_id,
    };
    if (articleId) {
      await updateArticleApi({ ...reqData, id: articleId });
      form.setFieldsValue({
        channel_id: '',
        content: '',
        title: '',
        type: 0
      })
      message.success('更新成功')
    } else {
      await createArticleApi(reqData);
      form.setFieldsValue({
        channel_id: '',
        content: '',
        title: '',
        type: 0
      })
      message.success('发布成功')
    }
  };

  const [imgList, setImgList] = useState([]);
  const onImgUpload = (value) => {
    setImgList(value.fileList);
  };

  const [imgType, setImgType] = useState(0);
  const onTypeChange = (value) => {
    setImgType(value.target.value);
  };

  const [searchParams] = useSearchParams();
  const articleId = searchParams.get("id");
  const [form] = Form.useForm();
  useEffect(() => {
    const fetchArticleById = async () => {
      const res = await getArticleById(articleId);
      const data = res.data;
      const { cover } = data;
      form.setFieldsValue({ ...data, type: cover.type });
      setImgType(cover.type);
      setImgList(
        cover.images.map((url) => {
          url: return { url };
        })
      );
    };
    if (!articleId) return;
    fetchArticleById();
  }, [articleId, form]);

  return (
    <div className="publish relative">
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>首页</Link> },
              { title: articleId ? "修改文章" : "发布文章" },
            ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          validateTrigger="onBlur"
          onFinish={onSubmit}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: "请选择文章频道" }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channelList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {imgType > 0 && (
              <Upload
                className=""
                maxCount={imgType}
                action={"http://geek.itheima.net/v1_0/upload"}
                name="image"
                onChange={onImgUpload}
                listType="picture-card"
                fileList={imgList}
                showUploadList
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            )}
          </Form.Item>

          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: "请输入文章内容" }]}
          >
            <ReactQuill
              className="publish-quill h-[300px]"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space className="mt-8">
              <Button size="large" type="primary" htmlType="submit">
                {articleId ? '更新文章':'发布文章'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Publish;
