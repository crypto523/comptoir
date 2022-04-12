"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nft_json_url = exports.nft_data = void 0;
const nft_data = (creator) => {
    return {
        name: 'Helios 3D',
        symbol: 'AURY',
        description: 'Helios artwork for Aurorians and some $AURY holders',
        seller_fee_basis_points: 1000,
        image: 'https://arweave.net/ZPoeB7tMyKfAc_vrNfTfb7XCKhoccW8DS3UgUyacQMU?ext=gif',
        animation_url: 'https://arweave.net/ZXSDhLbbD2gOn2Ch95hgCpvOZoC5RQntKFOuzC-yAqU?ext=mp4',
        external_url: '',
        collection: { name: 'Helios 3D', family: 'Aurory' },
        properties: {
            files: [
                {
                    uri: 'https://arweave.net/ZPoeB7tMyKfAc_vrNfTfb7XCKhoccW8DS3UgUyacQMU?ext=gif',
                    type: 'image/gif',
                },
                {
                    uri: 'https://arweave.net/ZXSDhLbbD2gOn2Ch95hgCpvOZoC5RQntKFOuzC-yAqU?ext=mp4',
                    type: 'video/mp4',
                },
            ],
            category: 'video',
            creators: [
                {
                    address: creator,
                    share: 100,
                },
            ],
        },
    };
};
exports.nft_data = nft_data;
exports.nft_json_url = 'https://arweave.net/uKoxW5gu2A7Wem-tgyWZ9-T46aAg49Gac-n0GNibTjI';
