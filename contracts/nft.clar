;; SIP-009 compliant NFT contract (basic)
(impl-trait 'SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM1PCNQ5P.sip009-nft-trait.sip009-nft-trait)

(define-non-fungible-token example-nft uint)
(define-data-var next-id uint u1)

(define-public (mint)
  (let ((id (var-get next-id)))
    (nft-mint? example-nft id tx-sender)
    (var-set next-id (+ id u1))
    (ok id)
  )
)

(define-read-only (get-owner (id uint))
  (nft-get-owner? example-nft id)
)

