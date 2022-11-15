import { rest } from "msw";

export const handlers = [
    rest.get("https://rebrickable.com/api/v3/lego/minifigs/fig-008941", (req, res, ctx) =>
        res(
            ctx.json({
                set_num: "fig-008941",
                name: "Bellatrix Lestrange, Long Black Hair over Shoulder, Black Dress, Plain Skirt",
                num_parts: 4,
                set_img_url: "https://cdn.rebrickable.com/media/sets/fig-008941/104945.jpg",
                set_url:
                    "https://rebrickable.com/minifigs/fig-008941/bellatrix-lestrange-long-black-hair-over-shoulder-black-dress-plain-skirt/",
                last_modified_dt: "2020-06-04T19:00:36.781081Z",
            })
        )
    ),
    rest.get("https://rebrickable.com/api/v3/lego/minifigs/fig-008941/parts/", (req, res, ctx) =>
        res(ctx.json(partsResponse))
    ),
    rest.post("/api/shippingData", (req, res, ctx) => {
        console.log(req);
        return res(ctx.json(req.text()));
    }),
];

const partsResponse = {
    count: 4,
    next: null,
    previous: null,
    results: [
        {
            id: 4690124,
            inv_part_id: 4690124,
            part: {
                part_num: "92082",
                name: "Hair Long with Part over Face",
                part_cat_id: 65,
                part_url: "https://rebrickable.com/parts/92082/hair-long-with-part-over-face/",
                part_img_url: "https://cdn.rebrickable.com/media/parts/elements/4594436.jpg",
                external_ids: {
                    BrickLink: ["92082"],
                    BrickOwl: ["553974"],
                    Brickset: ["92082"],
                    LEGO: ["92082"],
                },
                print_of: null,
            },
            color: {
                id: 0,
                name: "Black",
                rgb: "05131D",
                is_trans: false,
                external_ids: {
                    BrickLink: {
                        ext_ids: [11],
                        ext_descrs: [["Black"]],
                    },
                    BrickOwl: {
                        ext_ids: [38],
                        ext_descrs: [["Black"]],
                    },
                    LEGO: {
                        ext_ids: [26, 1012],
                        ext_descrs: [["Black", "BLACK"], ["CONDUCT. BLACK"]],
                    },
                    Peeron: {
                        ext_ids: [null],
                        ext_descrs: [["black"]],
                    },
                    LDraw: {
                        ext_ids: [0, 256],
                        ext_descrs: [["Black"], ["Rubber_Black"]],
                    },
                },
            },
            set_num: "fig-008941",
            quantity: 1,
            is_spare: false,
            element_id: "6310823",
            num_sets: 4,
        },
        {
            id: 4690122,
            inv_part_id: 4690122,
            part: {
                part_num: "36036",
                name: "Hips and Legs Under Dress/Robe",
                part_cat_id: 61,
                part_url: "https://rebrickable.com/parts/36036/hips-and-legs-under-dressrobe/",
                part_img_url: "https://cdn.rebrickable.com/media/parts/elements/6219463.jpg",
                external_ids: {
                    BrickLink: ["36036"],
                    BrickOwl: ["32496"],
                    Brickset: ["36036"],
                    LDraw: ["36036"],
                    LEGO: ["36036"],
                },
                print_of: null,
            },
            color: {
                id: 0,
                name: "Black",
                rgb: "05131D",
                is_trans: false,
                external_ids: {
                    BrickLink: {
                        ext_ids: [11],
                        ext_descrs: [["Black"]],
                    },
                    BrickOwl: {
                        ext_ids: [38],
                        ext_descrs: [["Black"]],
                    },
                    LEGO: {
                        ext_ids: [26, 1012],
                        ext_descrs: [["Black", "BLACK"], ["CONDUCT. BLACK"]],
                    },
                    Peeron: {
                        ext_ids: [null],
                        ext_descrs: [["black"]],
                    },
                    LDraw: {
                        ext_ids: [0, 256],
                        ext_descrs: [["Black"], ["Rubber_Black"]],
                    },
                },
            },
            set_num: "fig-008941",
            quantity: 1,
            is_spare: false,
            element_id: "6219463",
            num_sets: 7,
        },
        {
            id: 4690123,
            inv_part_id: 4690123,
            part: {
                part_num: "973c03h02pr5221",
                name: "Torso Dress, Ornate Decorations, Necklace with Crucifix Print, Black Arms, Light Nougat Hands",
                part_cat_id: 60,
                part_url:
                    "https://rebrickable.com/parts/973c03h02pr5221/torso-dress-ornate-decorations-necklace-with-crucifix-print-black-arms-light-nougat-hands/",
                part_img_url: "https://cdn.rebrickable.com/media/parts/elements/6310892.jpg",
                external_ids: {
                    BrickLink: ["973pb4052c01"],
                    BrickOwl: ["697079"],
                    Brickset: ["76382"],
                    LEGO: ["76382"],
                },
                print_of: "973c03h02",
            },
            color: {
                id: 0,
                name: "Black",
                rgb: "05131D",
                is_trans: false,
                external_ids: {
                    BrickLink: {
                        ext_ids: [11],
                        ext_descrs: [["Black"]],
                    },
                    BrickOwl: {
                        ext_ids: [38],
                        ext_descrs: [["Black"]],
                    },
                    LEGO: {
                        ext_ids: [26, 1012],
                        ext_descrs: [["Black", "BLACK"], ["CONDUCT. BLACK"]],
                    },
                    Peeron: {
                        ext_ids: [null],
                        ext_descrs: [["black"]],
                    },
                    LDraw: {
                        ext_ids: [0, 256],
                        ext_descrs: [["Black"], ["Rubber_Black"]],
                    },
                },
            },
            set_num: "fig-008941",
            quantity: 1,
            is_spare: false,
            element_id: "6310892",
            num_sets: 1,
        },
        {
            id: 4690121,
            inv_part_id: 4690121,
            part: {
                part_num: "3626cpr2199",
                name: "Minifig Head, Eyebrows, Dark Orange Cheek Lines and Lips, Eyebrow Raised / Open Mouth Angry Print",
                part_cat_id: 59,
                part_url:
                    "https://rebrickable.com/parts/3626cpr2199/minifig-head-eyebrows-dark-orange-cheek-lines-and-lips-eyebrow-raised-open-mouth-angry-print/",
                part_img_url: "https://cdn.rebrickable.com/media/parts/elements/6182218.jpg",
                external_ids: {
                    BrickLink: ["3626cpb1780"],
                    BrickOwl: ["105430"],
                    Brickset: ["32598"],
                    LEGO: ["32598"],
                },
                print_of: "3626c",
            },
            color: {
                id: 78,
                name: "Light Nougat",
                rgb: "F6D7B3",
                is_trans: false,
                external_ids: {
                    BrickLink: {
                        ext_ids: [90],
                        ext_descrs: [["Light Nougat"]],
                    },
                    BrickOwl: {
                        ext_ids: [65],
                        ext_descrs: [["Light Flesh"]],
                    },
                    LEGO: {
                        ext_ids: [283],
                        ext_descrs: [["Light Nougat", "L.NOUGAT"]],
                    },
                    Peeron: {
                        ext_ids: [null],
                        ext_descrs: [["ltflesh"]],
                    },
                    LDraw: {
                        ext_ids: [78],
                        ext_descrs: [["Light_Flesh"]],
                    },
                },
            },
            set_num: "fig-008941",
            quantity: 1,
            is_spare: false,
            element_id: "6182218",
            num_sets: 9,
        },
    ],
};
