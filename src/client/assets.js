// Asset manager

const ASSET_NAMES = ['ape.png', 'tree.png']

const assets = {};
const downloadPromise = Promise.all(ASSET_NAMES.map(downloadAsset));

function downloadAsset(assetName) {
    return new Promise(resolve => {
        const asset = new Image();
        asset.src = `/assets/${assetName}`;
        asset.onload = () => {
            console.log(`${assetName} downloaded.`);
            assets[assetName] = asset;
            resolve();
        };
    });
}

export const downloadAssets = () => downloadPromise;
export const getAsset = assetName => assets[assetName];
