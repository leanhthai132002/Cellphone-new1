import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { createProduct, updateProduct, getProduct } from "../../../api/product";
import { Button, Col, Form, Row, Select, Typography } from "antd";
import "react-toastify/dist/ReactToastify.css";

type PRODUCT_TYPE = {
    name: string;
    saleOffPrice: number;
    feature: string;
    descriptionS: string;
    originalPrice: number;
    image: string;
    categories: string
};

function FormProduct() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [imageBase64, setImageBase64] = useState<any>('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: "",
            saleOffPrice: 0,
            feature: "",
            descriptionS: "",
            originalPrice: 0,
            image: "",
            categories: ""
        },
    });

    const onSubmit: SubmitHandler<PRODUCT_TYPE> = (data) => {
        const submitData = {
            ...data,
            saleOffPrice: +data.saleOffPrice,
            originalPrice: +data.originalPrice,
            image: imageBase64 
        };
        if (id) {
            return handleUpdateProduct(submitData);
        }
        return handleCreateProduct(submitData);
    };
    const handleCreateProduct = async (data: PRODUCT_TYPE) => {
        const response = await createProduct(data);

        if (response.status === 200) {
            navigate("/admin");
            alert("Thêm thành công");
        }
    };

    const handleUpdateProduct = async (data: PRODUCT_TYPE) => {
        const response = await updateProduct(id, data);

        if (response.status === 200) {
            navigate("/admin");
            alert("Cập nhật thành công");
        }
    };

    const handleGetProduct = async (id: string) => {
        const response = await getProduct(id);
        if (response.status === 200) {
            reset({
                ...response.data,
                status: `${response.data.status}`,
            });
        }
    };

    const getEventResult = (event: any) => {
        if (event && event.target && typeof event.target.result == 'string') {
            return event.target.result;
        }

        return '';
    };

    const handleChangeFile = (event: any) => {
        const file = event.target.files[0];
        if (!file) {
            console.log('Không có file');
            return;
        } else if (file.size > 500000) {
            console.log('File quá lớn');
            return;
        } 
        const reader = new FileReader();
        reader.onload = (e) => {
            const image = new Image();
            if (e && e.target) {
                image.src = getEventResult(e);
                console.log(image.width, image.height, file.size, file.type);
                setImageBase64(e.target.result);
            }
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        if (id) {
            handleGetProduct(id);
        }
    }, [id]);
    return (
        <div>
            <h3>Thêm mới sản phẩm</h3>
            <Row gutter={16}>
                <Col span={14}>
                    <Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div className="mb-3">
                        <label className="form-label">Ảnh</label>
                        <input
                            className="form-control"
                            type="file"
                            {...register(
                                'image',
                                // {
                                //     required: { value: true, message: "Không được bỏ trống" }
                                // }
                            )}
                            onChange={(event) => handleChangeFile(event)}
                            
                        />
                        <div className="form-text" style={{ color: 'red' }}>
                            {errors.image ? errors.image.message : ''}
                        </div>
                        <img src={imageBase64} width={100} alt="" />

                    </div>
                        <div>
                            <label className="form-label" htmlFor="">
                                Tên sản phẩm
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tên sản phẩm"
                                {...register("name", {
                                    required: { value: true, message: "Bắt buộc" },
                                })}
                            />
                            <div style={{ color: "red" }}>{errors.name?.message}</div>
                        </div>

                        <div>
                            <label className="form-label" htmlFor="">
                                Giá gốc
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Giá gốc"
                                {...register("originalPrice",

                                    {
                                        required: { value: true, message: "Bắt buộc" },
                                    }
                                )}
                            />
                            <div style={{ color: "red" }}>{errors.name?.message}</div>
                        </div>

                        <div>
                            <label className="form-label" htmlFor="">
                                Giá khuyến mãi
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Giá khuyến mãi"
                                {...register("saleOffPrice",
                                    {
                                        required: { value: true, message: "Bắt buộc" },
                                    })}

                            />
                            <div style={{ color: "red" }}>{errors.name?.message}</div>
                        </div>

                        <div>
                            <label className="form-label" htmlFor="">
                                Đặc điểm nổi bật
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Đặc điểm nổi bật"
                                {...register("feature",
                                    {
                                        required: { value: true, message: "Bắt buộc" },
                                    })}
                            />
                            <div style={{ color: "red" }}>{errors.name?.message}</div>
                        </div>
                        <div>
                            <label className="form-label" htmlFor="">
                                Mô tả
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Mô tả"
                                {...register("descriptionS",
                                    {
                                        required: { value: true, message: "Bắt buộc" },
                                    })}
                            />
                            <div style={{ color: "red" }}>{errors.name?.message}</div>
                        </div>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                {id ? "Cập nhật" : "Tạo mới"}
                            </Button>
                        </Form.Item>
                    </form>
                </Col>
            </Row>
        </div>
    );
}

export default FormProduct;