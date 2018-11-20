const multiaddr = require('multiaddr');
const PeerInfo = require('peer-info');
// const PeerId = require('peer-id');

function getB58String(peer): string {
  let b58Id = peer;
  if (multiaddr.isMultiaddr(peer)) {
    const relayMa = multiaddr(peer);
    b58Id = relayMa.getPeerId();
  } else if (PeerInfo.isPeerInfo(peer)) {
    b58Id = peer.id.toB58String();
  }

  return b58Id;
}

export { getB58String };
