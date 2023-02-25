#!/usr/bin/env deno run

import { encode as base64encode } from 'https://deno.land/std@0.178.0/encoding/base64.ts';

// Generates a random 32 byte encryption key string
function generateEncryptionKey() {
  const buf = new Uint8Array(32 / 2); // 32 bytes = 64 hex characters
  crypto.getRandomValues(buf);

  let result = "";

  for (let i = 0; i < buf.length; ++i) {
    result += ("0" + buf[i].toString(16)).slice(-2);
  }

  return result;
}

const key = generateEncryptionKey();

console.log(base64encode(key));
